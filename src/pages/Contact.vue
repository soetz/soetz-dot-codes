<script setup lang="ts">
import Appear from "../components/Appear.vue";
import { analyticsService } from "../services";
import axios from "axios";
import { environment } from "../../environment.client";
import { ref } from "vue";
import { throttle } from "lodash";
import { useRoute } from "vue-router";

const route = useRoute();

const username = ref("");
const userEmail = ref("");
const messageSubject = ref("");
const message = ref("");

const usernameErrors = ref<string[]>([]);
const userEmailErrors = ref<string[]>([]);
const messageSubjectErrors = ref<string[]>([]);
const messageErrors = ref<string[]>([]);

const sending = ref(false);
const sent = ref(Object.prototype.hasOwnProperty.call(route.query, "success"));
const sendError = ref(
  Object.prototype.hasOwnProperty.call(route.query, "failure")
);

const textareaStyle = ref({ height: "180px" });

const resizeTextarea = throttle((event) => {
  const textHeight = event.target.scrollHeight;
  const newHeight = textHeight < 180 ? 180 : textHeight;

  if (event.target.offsetHeight < newHeight) {
    textareaStyle.value = {
      height: `${newHeight}px`,
    };
  }
}, 100);

const checkForm = () => {
  if (username.value.length <= 0) {
    usernameErrors.value = ["empty"];
  } else {
    usernameErrors.value = [];
  }
  if (userEmail.value.length <= 0) {
    userEmailErrors.value = ["empty"];
  } else {
    userEmailErrors.value = [];
  }
  if (messageSubject.value.length <= 0) {
    messageSubjectErrors.value = ["empty"];
  } else {
    messageSubjectErrors.value = [];
  }
  if (message.value.length <= 0) {
    messageErrors.value = ["empty"];
  } else {
    messageErrors.value = [];
  }

  const email = /.+@.+\..+/;
  if (!userEmail.value.match(email)) {
    userEmailErrors.value.push("not-email");
  }

  return (
    usernameErrors.value.length === 0 &&
    userEmailErrors.value.length === 0 &&
    messageSubjectErrors.value.length === 0 &&
    messageErrors.value.length === 0
  );
};

const contactUrl = ref(
  `http${environment.server.secure ? "s" : ""}://${environment.server.domain}:${
    environment.server.port
  }/contact`
);

const formSubmit = (event: Event) => {
  event.preventDefault();
  const valid = checkForm();

  if (valid) {
    const sessionToken = analyticsService.getCurrentSessionToken();
    if (sessionToken && sessionToken !== "error") {
      sending.value = true;
      sent.value = false;
      sendError.value = false;

      axios
        .post(contactUrl.value, {
          "session-token": sessionToken,
          "user-name": username.value,
          "user-email": userEmail.value,
          "message-subject": messageSubject.value,
          "message": message.value,
        })
        .catch(() => {
          sending.value = false;
          sendError.value = true;
        })
        .then(() => {
          if (!sendError.value) {
            sending.value = false;
            sent.value = true;

            username.value = "";
            userEmail.value = "";
            messageSubject.value = "";
            message.value = "";
          }
        });
    }
  }
};
</script>

<template>
  <section class="limited-width">
    <Appear class="overflow-visible">
      <h1>Contact me</h1>
      <p class="limited-width-small">
        Feel free to contact me using whatever way you prefer, but you should be
        aware that this form is the only one that ensures that I read your
        message.
      </p>
      <p class="limited-width-small">
        Do you want or need to put an attachment along with your message? I
        recommend that you use
        <a
          class="link-block"
          href="https://fromsmash.com/"
          targe="_blank"
          rel="noopener nofollow"
          >Smash</a
        >.
      </p>
      <form method="post" :action="contactUrl" @submit="formSubmit($event)">
        <div
          class="input-group"
          :class="{ 'has-error': usernameErrors.length }"
        >
          <label for="user-name">Your name: </label>
          <input
            id="user-name"
            v-model="username"
            type="text"
            name="user-name"
            aria-required="true"
            aria-describedby="user-name-error-empty"
            :aria-invalid="usernameErrors.length > 0"
          />
          <span
            v-if="usernameErrors.includes('empty')"
            id="user-name-error-empty"
            class="error-message"
            >You must enter a name</span
          >
        </div>
        <div
          class="input-group"
          :class="{ 'has-error': userEmailErrors.length }"
        >
          <label for="user-email">Your email address: </label>
          <input
            id="user-email"
            v-model="userEmail"
            type="email"
            name="user-email"
            aria-required="true"
            aria-describedby="user-email-error-empty user-email-error-email"
            :aria-invalid="userEmailErrors.length > 0"
          />
          <span
            v-if="userEmailErrors.includes('empty')"
            id="user-email-error-empty"
            class="error-message"
            >You must enter an email (you probably need an answer, right?)</span
          >
          <span
            v-if="
              !userEmailErrors.includes('empty') &&
              userEmailErrors.includes('not-email')
            "
            id="user-email-error-email"
            class="error-message"
            >Your email doesn’t seem to be valid</span
          >
        </div>
        <div
          class="input-group"
          :class="{ 'has-error': messageSubjectErrors.length }"
        >
          <label for="message-subject">The subject of your message: </label>
          <input
            id="message-subject"
            v-model="messageSubject"
            type="text"
            name="message-subject"
            aria-required="true"
            aria-describedby="message-subject-error-empty"
            :aria-invalid="messageSubjectErrors.length > 0"
          />
          <span
            v-if="messageSubjectErrors.includes('empty')"
            id="message-subject-error-empty"
            class="error-message"
            >You must enter a subject</span
          >
        </div>
        <div class="input-group" :class="{ 'has-error': messageErrors.length }">
          <label for="message">Your message: </label>
          <textarea
            id="message"
            v-model="message"
            name="message"
            :style="textareaStyle"
            aria-required="true"
            aria-describedby="message-error-empty"
            :aria-invalid="messageErrors.length > 0"
            @input="resizeTextarea($event)"
          ></textarea>
          <span
            v-if="messageErrors.includes('empty')"
            id="message-error-empty"
            class="error-message"
            >You must enter a message, because doing otherwise kind of defeats
            the whole point, don’t you think?</span
          >
        </div>
        <input
          type="hidden"
          name="session-token"
          :value="analyticsService.getCurrentSessionToken()"
        />
        <input
          class="button-block"
          type="submit"
          :disabled="sending"
          value="Send message"
          aria-describedby="status-sending status-success status-failure"
        />
        <div v-if="sending" id="status-sending" class="status-message"
          >Sending…</div
        >
        <div
          v-if="sent"
          id="status-success"
          class="status-message status-success"
          >Sent!</div
        >
        <div
          v-if="sendError"
          id="status-failure"
          class="status-message status-failure"
          >There was an error sending your message… sorry!</div
        >
      </form>
    </Appear>
  </section>
</template>

<style scoped>
.limited-width {
  width: 100%;
  max-width: 800px;

  margin-left: auto;
  margin-right: auto;

  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 13px;
}

.limited-width-small {
  max-width: 480px;
}

.overflow-visible {
  overflow-x: visible;
  overflow-y: visible;
}

form {
  margin-top: 50px;
}

.input-group {
  display: flex;
  flex-direction: column;

  margin-bottom: 14px;
}

.input-group label {
  max-width: 480px;

  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 500;
}

.input-group.has-error label {
  color: var(--red-100);
}

.theme-dark .input-group.has-error label {
  color: var(--red-90);
}

.theme-transition .input-group.has-error label {
  transition: color 0.5s ease-in-out;
}

.input-group input {
  max-width: 480px;
}

.input-group input,
.input-group textarea {
  padding-left: 12px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;

  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: rgba(var(--theme-700-rgb), 0.6);
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: rgba(var(--theme-700-rgb), 0.6);
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: rgba(var(--theme-700-rgb), 0.6);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(var(--theme-700-rgb), 0.6);

  outline-color: rgba(var(--theme-400-rgb), 0.8);
  outline-offset: 0;

  background-color: transparent;
  color: var(--theme-900);

  font-family: boreal, Helvetica, Arial, sans-serif;
  font-size: 18px;
}

.input-group textarea {
  max-width: 600px;
  resize: none;

  font-size: 16px;

  overflow-y: hidden;
}

.theme-dark .input-group input,
.theme-dark .input-group textarea {
  border-left-color: rgba(var(--theme-20-rgb), 0.6);
  border-top-color: rgba(var(--theme-20-rgb), 0.6);
  border-right-color: rgba(var(--theme-20-rgb), 0.6);
  border-bottom-color: rgba(var(--theme-20-rgb), 0.6);

  outline-color: rgba(var(--theme-30-rgb), 0.8);

  color: var(--theme-10);
}

.theme-transition .input-group input,
.theme-transition .input-group textarea {
  transition: border-left-color 0.5s ease-in-out,
    border-top-color 0.5s ease-in-out, border-right-color 0.5s ease-in-out,
    border-bottom-color 0.5s ease-in-out, outline-color 0.5s ease-in-out,
    color 0.5s ease-in-out;
}

.input-group.has-error input,
.input-group.has-error textarea {
  border-left-color: var(--red-100);
  border-top-color: var(--red-100);
  border-right-color: var(--red-100);
  border-bottom-color: var(--red-100);
}

.error-message {
  color: var(--red-100);

  font-style: italic;
}

.theme-dark .error-message {
  color: var(--red-90);
}

.theme-transition .error-message {
  transition: color 0.5s ease-in-out;
}

.status-message {
  margin-top: 10px;

  font-size: 18px;
  font-weight: 500;
}

.theme-transition .status-message {
  transition: color 0.5s ease-in-out;
}

.status-message.status-success {
  color: var(--green-100);
}

.theme-dark .status-message.status-success {
  color: var(--green-90);
}

.status-message.status-failure {
  color: var(--red-100);
}

.theme-dark .status-message.status-failure {
  color: var(--red-90);
}
</style>
