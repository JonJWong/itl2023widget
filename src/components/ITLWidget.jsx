import { useState, useEffect } from "react";
import { config, LADDER_LENGTH, REFRESH_INTERVAL } from "../scripts/config";

import "../assets/main.scss";

// COMPONENT IMPORTS
import ClearInfo from "./ClearInfo";
import EntrantInfo from "./EntrantInfo";
import Ladder from "./Ladder";
import TechLevelInfo from "./TechLevelInfo";

const ITLWidget = () => {
  const [state, setState] = useState(config.DEFAULT_STATE);
  const [loaded, setLoaded] = useState(false);
  const [currStyle, setCurrStyle] = useState(config.currentStyle)

  const getInfo = (signal = null) => {
    fetch(config.endpoint, { signal })
      .then((response) => {
        if (response.ok) {
          const json = response.json();
          return json;
        }

        return Promise.reject(response);
      })
      .then((json) => {
        const { entrant, ladder } = json.data;

        // Calculate the ranking points difference between the current entrant and the rest of the ladder
        for (let i = 0; i < LADDER_LENGTH; i++) {
          ladder[i].difference =
            entrant.rankingPoints - ladder[i].rankingPoints;
        }

        entrant.techLevels = [
          entrant.crossoverLevel,
          entrant.sideswitchLevel,
          entrant.footswitchLevel,
          entrant.jackLevel,
          entrant.doublestepLevel,
          entrant.bracketLevel,
          entrant.staminaLevel,
        ];

        entrant.totalTechLevel = entrant.techLevels.reduce((a, b) => a + b, 0);

        setState({ entrant, ladder });
        if (!loaded) setLoaded(true);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Aborted!", error)
        } else {
          console.log("Error", error)
        }
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setCurrStyle(config.currentStyle)
    getInfo(signal);
    const componentInterval = setInterval(() => getInfo(signal), REFRESH_INTERVAL);

    return () => {
      controller.abort();
      clearInterval(componentInterval);
    };
  }, [config.currentStyle]);

  if (!loaded) return <></>;

  const { entrant, ladder } = state;

  return (
    <div className={`${config.currentStyle} bgwrap`}>
      <div className="wrapper">
        <img
          src={config.avatarSource == "" ? "Avatar.png" : config.avatarSource}
        />
        <h2>
          {config.overrideName == "" ? entrant.name : config.overrideName}
        </h2>

        <EntrantInfo entrant={entrant} />
        <ClearInfo entrant={entrant} />
        <TechLevelInfo entrant={entrant} currStyle={currStyle} />
        <Ladder ladder={ladder} />
      </div>
    </div>
  );
};

export default ITLWidget;
