const EntrantInfo = (props) => {
  const { entrant } = props;
  return (
    <ul className="entrant-info">
      <li>
        <h2>ID: {entrant.id}</h2>
      </li>
      <li>
        <h3>Rank: {entrant.rank}</h3>
      </li>
      <li className="entrant-points">
        <div>RP:</div>
        <div>{entrant.rankingPoints}</div>
      </li>
      <li className="entrant-points">
        <div>TP:</div>
        <div>{entrant.totalPoints}</div>
      </li>
    </ul>
  );
};

export default EntrantInfo;
