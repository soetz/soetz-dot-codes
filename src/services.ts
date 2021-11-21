import { analyticsServiceFactory } from "./services/analytics";
import { themeServiceFactory } from "./services/theme";

const analyticsService = analyticsServiceFactory();
const themeService = themeServiceFactory();

export { analyticsService, themeService };
