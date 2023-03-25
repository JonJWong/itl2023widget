const EntrantInfo = (props) => {
  const { entrant } = props;
  return (
    <ul className="entrant-info">
      <li className="entrant-id">
        <div>ID: {entrant.id}</div>
      </li>
      <li className="entrant-rank">
        <div>Rank: {entrant.rank}</div>
      </li>
      <li className="entrant-points">
        <div>RP:</div>
        <div />
        <div>{entrant.rankingPoints}</div>
      </li>
      <li className="entrant-points">
        <div>TP:</div>
        <div />
        <div>{entrant.totalPoints}</div>
      </li>
    </ul>
  );
};

export default EntrantInfo;
