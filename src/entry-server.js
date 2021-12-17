import {
  pageDescription,
  pageKeywords,
  pageSocialImage,
  pageTitle,
  pageUrl,
} from "./utilities/pageSeo";
import { Binary } from "mongodb";
import { createApp } from "./main";
import { renderToString } from "vue/server-renderer";
import { v4 as uuidv4 } from "uuid";

function convertToBinaryUuid(initialUuid) {
  const stripped = initialUuid.replace(/-/g, "").toLowerCase();
  return new Binary(Buffer.from(stripped, "hex"), Binary.SUBTYPE_UUID);
}

async function createNewAnalyticsSession(client, sessionId, pageUrl) {
  await client.connect();
  const database = client.db();
  const sessionsCollection = database.collection("sessions");
  const timestamp = new Date();
  // TODO: make it possible to use a special link to identify a session
  await sessionsCollection.insertOne({
    _id: convertToBinaryUuid(sessionId),
    started: timestamp,
    confirmed: false,
    navigations: [
      {
        path: pageUrl,
        timestamp: timestamp,
      },
    ],
  });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function render(url, manifest, mongoClient) {
  const { app, router } = createApp();

  // set the router to the desired URL before rendering
  router.push(url);
  await router.isReady();

  const ctx = {
    sessionToken: "error",
  };
  const sessionToken = uuidv4();

  try {
    await createNewAnalyticsSession(mongoClient, sessionToken, url);
    ctx.sessionToken = sessionToken;
  } catch (error) {
    console.error("MongoDB session insert fail :\n", error);
  } finally {
    mongoClient.close();
  }

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  let html = await renderToString(app, ctx);

  // the SSR manifest generated by Vite contains module -> chunk/asset mapping
  // which we can then use to determine what files need to be preloaded for this
  // request.
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);

  const sessionTokenInjection = renderSessionToken(ctx.sessionToken);

  const currentPageSeo = renderPageSeo(
    router.currentRoute.value.meta?.title,
    router.currentRoute.value.meta?.description,
    router.currentRoute.value.meta?.keywords,
    router.currentRoute.value.meta?.socialImage,
    router.currentRoute.value.path
  );

  return [html, preloadLinks, sessionTokenInjection, currentPageSeo];
}

function renderPageSeo(
  routeMetaTitle,
  routeMetaDescription,
  routeMetaKeywords,
  routeMetaSocialImage,
  routePath
) {
  const title = pageTitle(routeMetaTitle);
  const ogTitle = routeMetaTitle ? routeMetaTitle : pageTitle();
  const description = pageDescription(routeMetaDescription);
  const keywords = pageKeywords(routeMetaKeywords);
  const socialImageUrl = pageSocialImage(routeMetaSocialImage);
  const url = pageUrl(routePath);
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    ${
      socialImageUrl
        ? `
            <meta property="og:image" content="${socialImageUrl}" />
            <meta name="twitter:card" content="summary_large-image" />
          `
        : `<meta name="twitter:card" content="summary" />`
    }
  `;
}

function renderSessionToken(token) {
  return `<script>SESSION_TOKEN = '${token}'</script>`;
}

function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}

function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else {
    return "";
  }
}
