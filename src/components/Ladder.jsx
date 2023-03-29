import { formatDifference } from "../scripts/util";

const Ladder = (props) => {
  const { ladder } = props;
  return (
    <section className="ladder">
      <h2>ITL Online 2023 - Leaderboard</h2>
      <ul>
        {ladder.map((player, index) => {
          return (
            <li key={index} className={player.type}>
              <span className="ladder-rank">
                {player.rank}. {player.name}
              </span>
              <span>{formatDifference(player.difference)}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Ladder;
