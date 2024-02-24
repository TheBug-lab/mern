import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Banner from "./components/Banner";
import Quiz from "./components/Quiz";
import Collections from "./components/Collections";
import Find from "./components/Find";
function App() {
  let [game, setGame] = useState(0);
  let updateGame = (e) => {
    setGame(e.id);
  };
  let setTask = () => {
    if (game === 1) {
      return <Game handleTask={updateGame} />;
    } else if (game === 2) {
      return <Quiz handleTask={updateGame} />;
    } else if (game === 3) {
      return <Find handleTask={updateGame} />;
    }
  };
  return (
    <>
      <Banner />
      <Collections handleSubmit={updateGame} />

      <div className={game && "filter"}></div>
      {setTask()}
    </>
  );
}

/*
      <Collections handleSubmit={updateGame} />
      <Find handleTask={updateGame} />

      <div className={game && "filter"}></div>
      {setTask()}
      */
export default App;
