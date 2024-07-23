import "./App.css";
import ScoreRow from "./components/ScoreRow";
import Input from "./components/Input";
import { useLeaderBoardSelector } from "./components/hooks";
import footer_image from "./assets/footer-image.png";
import { FaTrophy } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

function App() {
  const { playersScoreData } = useLeaderBoardSelector();

  return (
    <div className="leaderboard">
      <h1 className="top-heading">FASTEST OF TODAY</h1>
      <div className="score-container">
        <div className="container">
          <div className="scoreRow-header">
            <div className="left">
              <span className="item item1">
                <FaTrophy />
              </span>
              <span className="item item2">NAME</span>
            </div>
            <div className="right">
              <span className="item item3">
                <FaClock />
              </span>
              <span className="item item4">TIME</span>
            </div>
          </div>
          {playersScoreData.slice(0, 10).map((data, index) => (
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
