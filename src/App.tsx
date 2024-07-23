import "./App.css";
import ScoreRow from "./components/ScoreRow";
import Input from "./components/Input";
import { useLeaderBoardSelector } from "./components/hooks";

function App() {
  const { playersScoreData } = useLeaderBoardSelector()

  return (
    <div className="leaderboard">
      <h1 className="top-heading">FASTEST OF TODAY</h1>
      <div className="score-container">
        <div className="container">
          {playersScoreData.map((data, index) => (
            <ScoreRow key={index} data={data} index={index} />
          ))}
        </div>
      </div>
      <Input />
    </div>
  );
}

export default App;
