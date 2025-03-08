import { createContext } from "react";

const LanguageContext = createContext({
  language: "zh",
  toggleLanguage: () => {},
});

export default LanguageContext;
