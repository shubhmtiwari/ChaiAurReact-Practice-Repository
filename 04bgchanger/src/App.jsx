import { useState } from "react";

function App() {
  const colors = [
    { name: "Coral", hex: "#FF6B6B", rgb: "255, 107, 107" },
    { name: "Sunset", hex: "#FFA500", rgb: "255, 165, 0" },
    { name: "Amber", hex: "#FFB700", rgb: "255, 183, 0" },
    { name: "Lime", hex: "#00D084", rgb: "0, 208, 132" },
    { name: "Mint", hex: "#00D9A3", rgb: "0, 217, 163" },
    { name: "Sky", hex: "#00BFD9", rgb: "0, 191, 217" },
    { name: "Ocean", hex: "#0099FF", rgb: "0, 153, 255" },
    { name: "Indigo", hex: "#5B6FFF", rgb: "91, 111, 255" },
    { name: "Purple", hex: "#A855F7", rgb: "168, 85, 247" },
    { name: "Rose", hex: "#EC4899", rgb: "236, 72, 153" },
    { name: "Slate", hex: "#64748B", rgb: "100, 116, 139" },
    { name: "Zinc", hex: "#27272A", rgb: "39, 39, 42" },
  ];

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  return (
    <div
      className="w-full h-screen transition-all duration-500 ease-in-out flex flex-col items-center justify-center"
      style={{ 
        backgroundColor: currentColor.hex,
        backgroundImage: `linear-gradient(135deg, ${currentColor.hex}00, ${currentColor.hex})`
      }}
    >
      {/* Color Display Card */}
      <div className="mb-20 text-center animate-fade-in">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {currentColor.name}
        </h1>
        <div className="flex flex-col gap-3 text-white text-lg drop-shadow-lg">
          <p className="font-mono text-2xl font-semibold">{currentColor.hex}</p>
          <p className="font-mono text-sm opacity-80">RGB({currentColor.rgb})</p>
        </div>
      </div>

      {/* Color Buttons Container */}
      <div className="fixed bottom-12 left-0 right-0 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 backdrop-blur-md bg-white/10 border border-white/20 px-6 py-4 rounded-2xl shadow-2xl">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorChange(color)}
                className={`group relative px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl active:scale-95 ${
                  currentColor.hex === color.hex
                    ? "ring-4 ring-white shadow-xl scale-110"
                    : "hover:ring-2 hover:ring-white"
                }`}
                style={{
                  backgroundColor: color.hex,
                  boxShadow: currentColor.hex === color.hex ? `0 0 20px ${color.hex}` : "none",
                }}
                title={`${color.name} - ${color.hex}`}
              >
                <span className="text-sm sm:text-base">{color.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-10 left-10 w-32 h-32 rounded-full opacity-10 blur-3xl" 
           style={{ backgroundColor: currentColor.hex }}></div>
      <div className="fixed bottom-1/3 right-10 w-40 h-40 rounded-full opacity-10 blur-3xl" 
           style={{ backgroundColor: currentColor.hex }}></div>
    </div>
  );
}

export default App;
