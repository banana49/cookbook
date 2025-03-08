const Header = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <header className="relative w-full bg-gray-100 py-4 px-6">
      {/* Language toggle button positioned in the corner */}
      <button
        onClick={toggleLanguage}
        className="absolute top-4 right-4 flex items-center justify-between w-20 h-8 bg-white rounded-full shadow-md overflow-hidden border border-gray-200 focus:outline-none"
        aria-label="Toggle language"
      >
        <div className="flex w-full h-full relative">
          {/* English label */}
          <span
            className={`flex items-center justify-center w-1/2 h-full text-sm z-10 transition-colors duration-300 ${
              language === "en" ? "text-white" : "text-gray-700"
            }`}
          >
            Eng
          </span>

          {/* Chinese label */}
          <span
            className={`flex items-center justify-center w-1/2 h-full text-sm z-10 transition-colors duration-300 ${
              language === "zh" ? "text-white" : "text-gray-700"
            }`}
          >
            中文
          </span>

          {/* Sliding highlighter */}
          <div
            className={`absolute top-0 h-full w-1/2 bg-blue-500 rounded-full transition-all duration-300 ease-in-out transform ${
              language === "zh" ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>
        </div>
      </button>

      {/* Header content */}
      <div className="text-center text-xl font-bold">
        {language === "zh"
          ? "欢迎来到五香食谱!"
          : "Welcome to the Five Spice Cookbook!"}
      </div>
    </header>
  );
};
