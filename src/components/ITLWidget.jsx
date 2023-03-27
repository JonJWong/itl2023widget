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

  const getInfo = () => {
    fetch(config.endpoint)
      .then((response) => {
        if (response.ok) {
          const json = response.json();
          return json;
        }

        return Promise.reject(response);
      })
      .then((json) => {
        const data = json.data;

        // Calculate the ranking points difference between the current entrant and the rest of the ladder
        for (let i = 0; i < LADDER_LENGTH; i++) {
          data.ladder[i].difference =
            data.entrant.rankingPoints - data.ladder[i].rankingPoints;
        }

        setState(data);
        if (!loaded) setLoaded(true);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    // Runs on component mount
    getInfo();
    const componentInterval = setInterval(() => getInfo(), REFRESH_INTERVAL);

    return () => {
      // Runs on component un-mount
      clearInterval(componentInterval);
    };

    /*
      Will run once on mount, and then whenever getInfo changes (never).
      Still runs on dismount with return
    */
  }, [getInfo]);

  if (!loaded) return <></>;

  const { entrant, ladder } = state;

  return (
    <div className={`${config.currentStyle} bgwrap`}>
      <div className="wrapper">
        <img
          src={config.avatarSource == "" ? "Avatar.png" : config.avatarSource}
        />
        <h1>
          {config.overrideName == "" ? entrant.name : config.overrideName}
        </h1>

        <EntrantInfo entrant={entrant} />
        <ClearInfo entrant={entrant} />
        <TechLevelInfo entrant={entrant} />
        <Ladder ladder={ladder} />
      </div>
    </div>
  );
};

export default ITLWidget;
