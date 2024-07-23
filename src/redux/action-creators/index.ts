import { UserNameAndScore } from "../../constants";

export function setPlayersScoreData(playersScoreData: UserNameAndScore[]) {
  return {
    type: "playersScoreData",
    payload: playersScoreData,
  };
}

export function setPlayerName(playerName: string) {
  return {
    type: "playerName",
    payload: playerName,
  };
}

export function setMinutes(minutes: string) {
  return {
    type: "minute",
    payload: minutes,
  };
}

export function setSeconds(seconds: string) {
  return {
    type: "second",
    payload: seconds,
  };
}

export function setMilliseconds(milliseconds: string) {
  return {
    type: "millisecond",
    payload: milliseconds,
  };
}
