const ClearInfo = (props) => {
  const { entrant } = props;
  return (
    <ul className="clear-info">
      <li className="passes">
        <div>Passes:</div>
        <div>{entrant.totalPass}</div>
      </li>
      <li className="fcs">
        <div>FCs:</div>
        <div>{entrant.totalFc}</div>
      </li>
      <li className="fecs">
        <div>FECs:</div>
        <div>{entrant.totalFec}</div>
      </li>
      <li className="quads">
        <div>Quads:</div>
        <div>{entrant.totalQuad}</div>
      </li>
      <li className="quints">
        <div>Quints:</div>
        <div>{entrant.totalQuint}</div>
      </li>
    </ul>
  );
};

export default ClearInfo;
