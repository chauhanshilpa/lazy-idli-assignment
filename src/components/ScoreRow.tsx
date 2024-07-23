import { UserNameAndScore } from "../constants";
interface Props {
  data: UserNameAndScore;
  index: number;
}

const ScoreRow = ({ data, index }: Props) => {
  return (
    <div className="scoreRow">
      <div className="left">
        <span className="item serial-number">{index + 1}</span>
        <span className="item player-name">{data.playerName}</span>
      </div>
      <div className="right">
        <span className="item prize-money">
          {index === 0
            ? "50000"
            : index === 1
            ? "5000"
            : index === 2
            ? "500"
            : null}
        </span>
        <span className="item time">
          {data.minutes}:{data.seconds}:{data.milliseconds}
        </span>
      </div>
    </div>
  );
};

export default ScoreRow;
