import { useRef, useState } from "react";
import Prompt from "./template/Prompt";

function Game({ handleTask }) {
  let [msg, setMsg] = useState(["Guess the Number", randomNumber(5)]);
  let [bdg, setbdg] = useState(["", 0, 0]);

  let inputRef = useRef(null);

  let HandleSubmit = (e) => {
    let temp = inputRef.current.value;

    e.preventDefault();

    if (msg[1] === +temp && temp !== "") {
      setMsg(["Guess the Number", randomNumber(5)]);
      setTimeout(() => {
        setbdg(["", +bdg[1] + 1, +bdg[2]]);
      }, 800);
      setbdg(["Score++", +bdg[1], +bdg[2]]);

      inputRef.current.value = "";
    } else if (msg[1] !== +temp && temp !== "") {
      setbdg(["Score++", bdg[1], +bdg[2]]);
      setTimeout(() => {
        setbdg(["", +bdg[1], +bdg[2] + 1]);
      }, 800);
      +msg[1] < +temp
        ? setbdg(["Guess is too high", bdg[1], +bdg[2] + 1])
        : setbdg(["Guess is too low", bdg[1], +bdg[2] + 1]);

      inputRef.current.value = "";
    }
  };

  let reset = () => {
    setMsg(["Guess the Number", randomNumber(5)]);
    setbdg(["", 0, 0]);
  };

  let skip = () => {
    setMsg(["Guess the Number", randomNumber(5)]);
    setbdg(["Number Changed", bdg[1], +bdg[2]]);
    setTimeout(() => {
      setbdg(["", +bdg[1], +bdg[2]]);
    }, 1000);
  };

  return (
    <Prompt
      handleRef={inputRef}
      message={msg}
      badge={bdg}
      handleSubmit={HandleSubmit}
      handleExit={handleTask}
      handleReset={reset}
      handleSkip={skip}
    />
  );
}

function randomNumber(size) {
  return Math.ceil(Math.random() * size);
}

export default Game;
