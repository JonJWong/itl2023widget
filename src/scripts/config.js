/*
  Change entrantId to be the same as your ITL entrant id.
  ex. entrantId = 99;

  Change currentStyle to your desired style 1-4. Styles are as follows:
  1: dark horizontal
  2: dark vertical
  3: light horizontal
  4: light vertical

  Change avatarSource to override the image displayed on the widget.
  Useful if you want to use a non-png file as an avatar.
  Format should be a URL.
  ex. "https://giphy.com/imageurl.gif"

  Change overrideName to override the name that displays on the widget.
  Useful if your ITL/GS name is over 11 characters, or if you prefer
  a different handle.
  ex. "joWng"
*/

const CONFIG_VARS = {
  entrantId: 41,
  currentStyle: 2,
  avatarSource: "",
  overrideName: "",
};

// Helper functions
function createLadder(num) {
  const ladderArray = [];
  for (let i = 0; i < num; i++) {
    ladderArray.push(EMPTY_LADDER_ENTRY);
  }
  return ladderArray;
}

// Object constants
const EMPTY_LADDER_ENTRY = {
  rank: "--",
  name: "--",
  rankingPoints: 0,
  difference: 0,
  type: "neutral",
};

const STYLES = {
  1: "dark horizontal",
  2: "dark vertical",
  3: "light horizontal",
  4: "light vertical",
};

// Variable constants and exports
export const LADDER_LENGTH = 6;
export const REFRESH_INTERVAL = 60000; // 60 seconds in milliseconds
export const config = {
  avatarSource: CONFIG_VARS.avatarSource,
  overrideName: CONFIG_VARS.overrideName,
  currentStyle: STYLES[CONFIG_VARS.currentStyle],
  endpoint: `https://itl2023.groovestats.com/api/entrant/${CONFIG_VARS.entrantId}/stats`,
  DEFAULT_STATE: {
    entrant: {
      id: "--",
      name: "---",
      rank: "---",
      rankingPoints: "--",
      totalPoints: "--",
      totalPass: "---",
      totalFc: "--",
      totalFec: "--",
      totalQuad: "--",
      totalQuint: "--",
      jackLevel: "-",
      crossoverLevel: "-",
      bracketLevel: "-",
      footswitchLevel: "-",
      sideswitchLevel: "-",
      doublestepLevel: "-",
      staminaLevel: "-",
    },
    ladder: createLadder(LADDER_LENGTH),
  },
};
