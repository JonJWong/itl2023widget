const EntrantInfo = (props) => {
  const { entrant } = props;
  return (
    <ul className="entrant-info">
      <li>
        <h3>Rank: {entrant.rank}</h3>
      </li>
      <li className="entrant-points">
        <span>RP:</span>
        <span>{entrant.rankingPoints}</span>
      </li>
      <li className="entrant-points">
        <span>TP:</span>
        <span>{entrant.totalPoints}</span>
      </li>
      <li className="entrant-points">
        <span>TTL:</span>
        <span>{entrant.totalTechLevel}</span>
      </li>
    </ul>
  );
};

export default EntrantInfo;
