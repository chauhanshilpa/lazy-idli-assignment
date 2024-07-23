import { useRef, useEffect } from "react";
import { UserNameAndScore } from "../constants";
import { useLeaderBoardSelector } from "./hooks";

interface Props {
  data: UserNameAndScore;
  index: number;
}

const ScoreRow = ({ data, index }: Props) => {
  const bottomRowRef = useRef<HTMLDivElement>(null);

    const { playersScoreData } = useLeaderBoardSelector();

  const scrollToLastRow = () => {
    bottomRowRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToLastRow, [playersScoreData]);

  return (
    <div className="scoreRow">
      <div>
        <span className="item serial-number">{index + 1}</span>
        <span className="item player-name">{data.playerName}</span>
      </div>
      <div>
        {/* prize */}
        <span className="item time">
          {data.minutes}:{data.seconds}:{data.milliseconds}
        </span>
      </div>
      <div ref={bottomRowRef}></div>
    </div>
  );
};

export default ScoreRow;
