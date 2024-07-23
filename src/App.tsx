import "./App.css";
import ScoreRow from "./components/ScoreRow";
import Input from "./components/Input";
import { useLeaderBoardSelector } from "./components/hooks";
import footer_image from "./assets/footer-image.png";

function App() {
  const { playersScoreData } = useLeaderBoardSelector();

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
      <div className="footer-parent">
        <div className="footer-element primary">
          <img src={footer_image} alt="footer-image" />
        </div>
        <div className="footer-element secondary">
          <img src={footer_image} alt="footer-image" />
        </div>
      </div>
    </div>
  );
}

export default App;
