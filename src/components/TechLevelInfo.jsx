const TechLevelInfo = (props) => {
  const { entrant } = props;
  return (
    <ul className="tech-level-info">
      <li>
        <div>BR:</div>
        <div>{entrant.bracketLevel}</div>
      </li>
      <li>
        <div>XO:</div>
        <div>{entrant.crossoverLevel}</div>
      </li>
      <li>
        <div>FS:</div>
        <div>{entrant.footswitchLevel}</div>
      </li>
      <li>
        <div>JA:</div>
        <div>{entrant.jackLevel}</div>
      </li>
      <li>
        <div>SS:</div>
        <div>{entrant.sideswitchLevel}</div>
      </li>
      <li>
        <div>DS:</div>
        <div>{entrant.doublestepLevel}</div>
      </li>
      <li>
        <div>ST:</div>
        <div>{entrant.staminaLevel}</div>
      </li>
    </ul>
  );
};

export default TechLevelInfo;
