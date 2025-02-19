import I18n from "react-native-i18n";
import * as RNLocalize from "react-native-localize"; // Import react-native-localize

import en from "./locales/en.json";
import hi from "./locales/hi.json";

// Ensure that locales exist
const locales = RNLocalize.getLocales();
const systemLocale = locales && locales.length > 0 ? locales[0].languageTag : "en";

// Set translations
I18n.fallbacks = true;
I18n.translations = { en, hi };
I18n.locale = systemLocale || "en"; // Fallback to English if null

export default I18n;
