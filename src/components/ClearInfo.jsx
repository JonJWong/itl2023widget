const ClearInfo = (props) => {
  const { entrant } = props;
  return (
    <ul className="clear-info">
      <li className="passes">
        <span>Passes:</span>
        <span>{entrant.totalPass}</span>
      </li>
      <li className="fcs">
        <span>FCs:</span>
        <span>{entrant.totalFc}</span>
      </li>
      <li className="fecs">
        <span>FECs:</span>
        <span>{entrant.totalFec}</span>
      </li>
      <li className="quads">
        <span>Quads:</span>
        <span>{entrant.totalQuad}</span>
      </li>
      <li className="quints">
        <span>Quints:</span>
        <span>{entrant.totalQuint}</span>
      </li>
    </ul>
  );
};

export default ClearInfo;
