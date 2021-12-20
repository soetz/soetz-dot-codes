import axios from "axios";
import { environment } from "../../environment.client";

interface AnalyticsService {
  setCurrentSessionToken(token: string): void;
  getCurrentSessionToken(): string;
  registerConfirmation(): void;
  registerNavigation(path: string): void;
}

const analyticsServiceFactory = (): AnalyticsService => {
  let sessionToken = "";

  const service: AnalyticsService = {
    setCurrentSessionToken: (token: string) => {
      sessionToken = token;
    },
    getCurrentSessionToken: (): string => {
      return sessionToken;
    },
    registerConfirmation: () => {
      if (sessionToken && sessionToken !== "error") {
        axios
          .post(
            `http://${environment.server.domain}:${environment.server.port}/confirm`,
            { sessionToken }
          )
          .catch(() => {
            // we do nothing :)
          });
      }
    },
    registerNavigation: (path: string) => {
      if (sessionToken && sessionToken !== "error") {
        axios
          .post(
            `http://${environment.server.domain}:${environment.server.port}/navigation`,
            { sessionToken, path }
          )
          .catch(() => {
            // we do nothing :)
          });
      }
    },
  };

  return service;
};

export { analyticsServiceFactory };
