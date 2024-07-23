import { useLeaderBoardSelector } from "./hooks";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../redux/action-creators/index";

const Input = () => {
  const { playerName, minutes, seconds, milliseconds } =
    useLeaderBoardSelector();

  const dispatch = useDispatch();
  const {
    setPlayersScoreData,
    setPlayerName,
    setMinutes,
    setSeconds,
    setMilliseconds,
  } = bindActionCreators(actionCreators, dispatch);

  function formatTime(value: string): string {
    return value.padStart(2, "0");
  }

  function handleNewEntry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formattedMinutes = formatTime(minutes || "0");
    const formattedSeconds = formatTime(seconds || "0");
    const formattedMilliseconds = formatTime(milliseconds || "0");
    setPlayersScoreData([
      {
        playerName: playerName,
        minutes: formattedMinutes,
        seconds: formattedSeconds,
        milliseconds: formattedMilliseconds,
      },
    ]);
    setPlayerName("");
    setMinutes("");
    setSeconds("");
    setMilliseconds("");
  }

  return (
    <form onSubmit={handleNewEntry} className="score-row-inputs container">
      <input
        type="text"
        id="playerName"
        name="playerName"
        placeholder="Player Name"
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
        required
      />
      <input
        type="text"
        id="minutes"
        name="minutes"
        placeholder="Minutes"
        value={minutes}
        onChange={(event) => setMinutes(event.target.value)}
      />
      <input
        type="text"
        id="seconds"
        name="seconds"
        placeholder="Seconds"
        value={seconds}
        onChange={(event) => setSeconds(event.target.value)}
      />
      <input
        type="text"
        id="milliseconds"
        name="milliseconds"
        placeholder="Milliseconds"
        value={milliseconds}
        onChange={(event) => setMilliseconds(event.target.value)}
      />
     <input type="submit" value="Submit"/>
    </form>
  );
};

export default Input;
