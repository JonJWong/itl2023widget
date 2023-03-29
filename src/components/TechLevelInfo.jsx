import { useEffect } from 'react';

const TechLevelInfo = (props) => {
  const { entrant, currStyle } = props;

  useEffect(() => {
    function normalizeTechLevels(techLevels) {
      const maxLevel = Math.max(...techLevels, 1);
      return techLevels.map((techLevel) => techLevel / maxLevel);
    }
    
    function drawGrooveRadar(entrantInfo) {
      const canvas = document.getElementById("canvas");
      const rads = (2 * Math.PI) / 7;
      const techLabels = ["XO", "SS", "FS", "JA", "DS", "BR", "ST"];
      const techLevels = normalizeTechLevels(entrantInfo.techLevels);
    
      if (canvas && canvas.getContext) {
        const lightTheme = currStyle.includes("light");
        const ctx = canvas.getContext("2d");
        ctx.font = lightTheme ? "9px sanserif" : "9px sanserif";
        ctx.fillStyle = lightTheme ? "black" : "white";
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(50, 50);
    
        for (let i = 0; i < 8; i++) {
          let ang = rads * i - Math.PI / 2;
          let xcomp = Math.cos(ang) * 43;
          let ycomp = Math.sin(ang) * 43;
          let xval = xcomp * techLevels[i] * 0.9;
          let yval = ycomp * techLevels[i] * 0.9;
          i == 0
            ? ctx.moveTo(xval + 50, yval + 50)
            : ctx.lineTo(xval + 50, yval + 50);
          i == 0 ? null : ctx.fillText(techLabels[i % 7], xcomp + 45, ycomp + 52);
        }
        const gradient = ctx.createRadialGradient(50, 50, 10, 50, 50, 60);
        if (lightTheme) {
          gradient.addColorStop(0, "rgb(140, 140, 240, 0.4)");
          gradient.addColorStop(0.3, "rgb(100, 100, 200, 0.8)");
          gradient.addColorStop(0.6, "rgb(40, 40, 200, 0.95)");
        } else {
          gradient.addColorStop(0, "rgb(240, 240, 240, 0.4)");
          gradient.addColorStop(0.3, "rgb(240, 240, 240, 0.8)");
          gradient.addColorStop(0.6, "rgb(140, 140, 240, 0.95)");
        }
        ctx.fillStyle = gradient;
        ctx.fill();
      }

    }

    drawGrooveRadar(entrant);
  }, [currStyle])

  return (
    <div className="tech-level-info">
      <canvas id="canvas" className="dead-end" grooveradar="special" />
    </div>
  );
};

export default TechLevelInfo;
