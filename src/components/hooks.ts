import { useSelector } from "react-redux";
import { RootState } from "../redux/store"

export function useLeaderBoardSelector() {
  const playersScoreData = useSelector(
    (state: RootState) => state.leaderBoardReducer.playersScoreData
  );
  const playerName = useSelector(
    (state: RootState) => state.leaderBoardReducer.playerName
  );
  const minutes = useSelector(
    (state: RootState) => state.leaderBoardReducer.minutes
  );
  const seconds = useSelector(
    (state: RootState) => state.leaderBoardReducer.seconds
  );
  const milliseconds = useSelector(
    (state: RootState) => state.leaderBoardReducer.milliseconds
  );

  return {
    playersScoreData,
    playerName,
    minutes,
    seconds,
    milliseconds,
  };
}
