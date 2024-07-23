import { USERNAME_SCORE_DUMMY_DATA, UserNameAndScore } from "../../constants";

interface Action {
  type: string;
  payload: UserNameAndScore[] | string;
}

interface LeaderBoardState {
  playersScoreData: UserNameAndScore[];
  playerName: string;
  minutes: string;
  seconds: string;
  milliseconds: string;
}

const initialState: LeaderBoardState = {
  playersScoreData: [...USERNAME_SCORE_DUMMY_DATA],
  playerName: "",
  minutes: "",
  seconds: "",
  milliseconds: "",
};

function timeToMilliseconds(time: {
  minutes: string;
  seconds: string;
  milliseconds: string;
}): number {
  return (
    parseInt(time.minutes, 10) * 60 * 1000 +
    parseInt(time.seconds, 10) * 1000 +
    parseInt(time.milliseconds, 10)
  );
}

function sortPlayers(players: UserNameAndScore[]): UserNameAndScore[]{
  return players.sort((a, b) => {
    return timeToMilliseconds(a) - timeToMilliseconds(b);
  });
}

export const leaderBoardReducer = (
  state = initialState,
  action: Action
): LeaderBoardState => {
  switch (action.type) {
    case "playersScoreData":
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          playersScoreData: sortPlayers([...state.playersScoreData, ...action.payload]),
        };
      }
      break;
    case "playerName":
      if (typeof action.payload === "string") {
        return { ...state, playerName: action.payload };
      }
      break;
    case "minute":
      if (typeof action.payload === "string") {
        return { ...state, minutes: action.payload };
      }
      break;
    case "second":
      if (typeof action.payload === "string") {
        return { ...state, seconds: action.payload };
      }
      break;
    case "millisecond":
      if (typeof action.payload === "string") {
        return { ...state, milliseconds: action.payload };
      }
      break;
    default:
      return state;
  }
  return state;
};
