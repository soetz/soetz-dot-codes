import axios from "axios";
import { environment } from "../../environment.client";

interface AnalyticsService {
  setCurrentSessionToken(token: string): void;
  registerConfirmation(): void;
  registerNavigation(path: string): void;
}

const analyticsServiceFactory = (): AnalyticsService => {
  let sessionToken = "";

  const service: AnalyticsService = {
    setCurrentSessionToken: (token: string) => {
      sessionToken = token;
    },
    registerConfirmation: () => {
      if (sessionToken && sessionToken !== "error") {
        axios
          .post(
            `http://${environment.analytics.server}:${environment.analytics.port}/confirm`,
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
            `http://${environment.analytics.server}:${environment.analytics.port}/navigation`,
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
