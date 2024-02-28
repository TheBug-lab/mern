import { useEffect, useRef, useState } from "react";
import promptQuestion from "../utils/promptQuestion";
import Prompt from "./template/Prompt";
import axios from "axios";

function Quiz({ handleTask }) {
  let [msg, setMsg] = useState(["Enter your age", 0]);
  let [bdg, setBdg] = useState(["", 0, 0]);
  let [userAge, setUserAge] = useState(0);
  let inputRef = useRef(null);
  let uri = "http://localhost:3000/tasks/1";

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => setBdg([...bdg, res.data.high]))
      .catch((err) => setBdg([...bdg, "OFFLINE"]));
  }, []);

  let HandleSubmit = (e) => {
    e.preventDefault();
    let userInput = inputRef.current.value;

    if (bdg[3] <= bdg[1] && +userInput === msg[1]) {
      setTimeout(() => {
        setBdg(["", +bdg[1] + 1, bdg[2], bdg[3] + 1]);
      }, 1000);
      setBdg(["Score++", +bdg[1], bdg[2], bdg[3]]);
      setMsg(promptQuestion(userAge));
      inputRef.current.value = "";
      return;
    }

    if (msg[0] === "Enter your age" && userInput != "") {
      setMsg(promptQuestion(userInput));
      setUserAge(parseInt(userInput));
      setBdg(["", bdg[1], bdg[2], bdg[3]]);
      inputRef.current.value = "";
    } else if (+userInput === msg[1] && userInput != "") {
      setTimeout(() => {
        setBdg(["", +bdg[1] + 1, bdg[2], bdg[3]]);
      }, 1000);
      setBdg(["Score++", +bdg[1], bdg[2], bdg[3]]);
      setMsg(promptQuestion(userAge));
      inputRef.current.value = "";
    } else if (+userInput !== msg[1] && userInput != "") {
      setTimeout(() => {
        setBdg(["", bdg[1], +bdg[2] + 1, bdg[3]]);
      }, 1000);
      setBdg(["wrong!", bdg[1], bdg[2], bdg[3]]);
      setMsg(promptQuestion(userAge));
      inputRef.current.value = "";
    }
  };

  let restart = () => {
    setMsg(["Enter your age", 0]);
    setBdg(["", 0, 0, bdg[3]]);
  };

  let skip = () => {
    if (msg[0] !== "Enter your age") {
      setMsg(promptQuestion(userAge));
    }
  };

  let save = (e) => {
    axios
      .put(uri, { high: bdg[3] })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
    console.log(bdg);
    handleTask(e);
  };

  return (
    <Prompt
      handleRef={inputRef}
      message={msg}
      badge={bdg}
      handleSubmit={HandleSubmit}
      handleExit={save}
      handleReset={restart}
      handleSkip={skip}
    />
  );
}
export default Quiz;
