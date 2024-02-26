import { useEffect, useRef, useState } from "react";
import Prompt from "./template/Prompt";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Game() {
  let [msg, setMsg] = useState(["Guess the Number", randomNumber(5)]);
  let [bdg, setbdg] = useState(["", 0, 0]);

  let navigate = useNavigate();
  let inputRef = useRef(null);
  let uri = "http://localhost:3000/task/2";

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => setbdg([...bdg, res.data.high]))
      .catch((err) => setbdg([...bdg, "OFFLINE"]));
  }, []);

  let HandleSubmit = (e) => {
    let temp = inputRef.current.value;
    e.preventDefault();

    if (bdg[3] <= bdg[1] && msg[1] === +temp) {
      setMsg(["Guess the Number", randomNumber(5)]);
      setTimeout(() => {
        setbdg(["", +bdg[1] + 1, +bdg[2], +bdg[3] + 1]);
      }, 800);
      setbdg(["Score++", +bdg[1], +bdg[2], bdg[3]]);
      inputRef.current.value = "";
      return;
    }

    if (msg[1] === +temp && temp !== "") {
      setMsg(["Guess the Number", randomNumber(5)]);
      setTimeout(() => {
        setbdg(["", +bdg[1] + 1, +bdg[2], bdg[3]]);
      }, 800);
      setbdg(["Score++", +bdg[1], +bdg[2], bdg[3]]);
      console.log(bdg);

      inputRef.current.value = "";
    } else if (msg[1] !== +temp && temp !== "") {
      setbdg(["Score++", bdg[1], +bdg[2], bdg[3]]);
      setTimeout(() => {
        setbdg(["", +bdg[1], +bdg[2] + 1, bdg[3]]);
      }, 800);
      +msg[1] < +temp
        ? setbdg(["Guess is too high", bdg[1], +bdg[2] + 1, bdg[3]])
        : setbdg(["Guess is too low", bdg[1], +bdg[2] + 1, bdg[3]]);

      inputRef.current.value = "";
    }
  };

  let reset = () => {
    setMsg(["Guess the Number", randomNumber(5)]);
    setbdg(["", 0, 0, bdg[3]]);
  };

  let skip = () => {
    setMsg(["Guess the Number", randomNumber(5)]);
    setbdg(["Number Changed", bdg[1], +bdg[2], bdg[3]]);
    setTimeout(() => {
      setbdg(["", +bdg[1], +bdg[2], bdg[3]]);
    }, 1000);
  };

  let save = (e) => {
    axios
      .put(uri, { high: bdg[3] })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
    navigate("/");
  };

  return (
    <Prompt
      handleRef={inputRef}
      message={msg}
      badge={bdg}
      handleSubmit={HandleSubmit}
      handleExit={save}
      handleReset={reset}
      handleSkip={skip}
    />
  );
}

function randomNumber(size) {
  return Math.ceil(Math.random() * size);
}

export default Game;
