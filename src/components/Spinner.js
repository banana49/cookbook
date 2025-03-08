import React, { useState, useRef, useContext } from "react";
import LanguageContext from "../pages/LanguageContext";
import "../styles/Spinner.css";

const SpiceSpinner = ({ onSpiceSelected }) => {
  const { language } = useContext(LanguageContext);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [selectedSpice, setSelectedSpice] = useState(null);
  const wheelRef = useRef(null);

  // Using colors that match your site's aesthetic better
  const spices = [
    {
      name: language === "en" ? "Star Anise" : "八角",
      color: "#9E7D5F",
      path: "star-anise",
    },
    {
      name: language === "en" ? "Cinnamon" : "肉桂",
      color: "#D85C45",
      path: "/cinnamon",
    },
    {
      name: language === "en" ? "Cloves" : "丁香",
      color: "#8F5B4A",
      path: "/cloves",
    },
    {
      name: language === "en" ? "Fennel" : "小茴香",
      color: "#A6A75D",
      path: "/fennel",
    },
    {
      name: language === "en" ? "Szechuan Pepper" : "花椒",
      color: "#BC473D",
      path: "/szechuan-pepper",
    },
  ];

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setSelectedSpice(null);

    // Generate random rotation between 2000 and 5000 degrees to ensure multiple spins
    const newRotation = rotation + 2000 + Math.floor(Math.random() * 3000);
    setRotation(newRotation);

    // Calculate which spice was selected
    setTimeout(() => {
      const deg = newRotation % 360;
      const segmentSize = 360 / spices.length;
      const selectedIndex = Math.floor((360 - (deg % 360)) / segmentSize);
      setSelectedSpice(spices[selectedIndex % spices.length]);
      setSpinning(false);

      if (onSpiceSelected) {
        onSpiceSelected(spices[selectedIndex % spices.length]);
      }
    }, 5000); // Match this with the CSS transition time
  };

  // Navigate to the spice page - fixing the navigation issue
  const goToSpicePage = (path) => {
    if (path && !spinning) {
      // Just use the path directly without window.location
      window.location.href = path;
    }
  };

  return (
    <div className="spinner-container">
      <div className="wheel-container">
        <svg
          className="wheel-svg"
          viewBox="0 0 100 100"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {spices.map((spice, index) => {
            const startAngle = index * (360 / spices.length);
            const endAngle = (index + 1) * (360 / spices.length);

            // Convert to radians
            const startAngleRad = ((startAngle - 90) * Math.PI) / 180;
            const endAngleRad = ((endAngle - 90) * Math.PI) / 180;

            // Calculate the path
            const x1 = 50 + 50 * Math.cos(startAngleRad);
            const y1 = 50 + 50 * Math.sin(startAngleRad);
            const x2 = 50 + 50 * Math.cos(endAngleRad);
            const y2 = 50 + 50 * Math.sin(endAngleRad);

            // Create the path string
            const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
            const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

            // Calculate the text position (middle of the segment, a bit outward)
            const midAngleRad = (startAngleRad + endAngleRad) / 2;
            const textX = 50 + 30 * Math.cos(midAngleRad);
            const textY = 50 + 30 * Math.sin(midAngleRad);

            // Calculate rotation for the text
            const textRotation = (startAngle + endAngle) / 2;

            return (
              <g key={index}>
                <path
                  d={pathData}
                  fill={spice.color}
                  stroke="#FFF"
                  strokeWidth="0.5"
                />
                <text
                  x={textX}
                  y={textY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="3.5"
                  fontWeight="bold"
                  transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                  style={{ textShadow: "0px 0px 2px rgba(0,0,0,0.5)" }}
                >
                  {spice.name}
                </text>
              </g>
            );
          })}
          <circle
            cx="50"
            cy="50"
            r="10"
            fill="#d85c45"
            stroke="#fff"
            strokeWidth="1"
          />
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="4"
            fontWeight="bold"
          >
            {language === "en" ? "SPIN" : "转动"}
          </text>
        </svg>
        <div className="pointer"></div>
      </div>

      <button className="spin-button" onClick={spinWheel} disabled={spinning}>
        {language === "en" ? "Spin the Wheel" : "转动香料轮"}
      </button>

      {selectedSpice && !spinning && (
        <div
          className="selected-spice"
          onClick={() => goToSpicePage(selectedSpice.path)}
        >
          <p>
            {language === "en"
              ? `You landed on ${selectedSpice.name}! Click to learn more.`
              : `你转到了 ${selectedSpice.name}！点击此处前往。`}
          </p>
        </div>
      )}
    </div>
  );
};

export default SpiceSpinner;
