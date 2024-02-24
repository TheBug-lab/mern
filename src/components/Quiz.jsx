import { useRef, useState } from "react";
import promptQuestion from "./utils/promptQuestion";
import Prompt from "./template/Prompt";

function Quiz({ handleTask }) {
  let [msg, setMsg] = useState(["Enter your age", 0]);
  let [bdg, setBdg] = useState(["", 0, 0]);
  let [userAge, setUserAge] = useState(0);
  let inputRef = useRef(null);

  let HandleSubmit = (e) => {
    e.preventDefault();
    let userInput = inputRef.current.value;

    if (msg[0] === "Enter your age" && userInput != "") {
      setMsg(promptQuestion(userInput));
      setUserAge(parseInt(userInput));
      setBdg(["", bdg[1], bdg[2]]);
      inputRef.current.value = "";
    } else if (+userInput === msg[1] && userInput != "") {
      setTimeout(() => {
        setBdg(["", +bdg[1] + 1, bdg[2]]);
      }, 1000);
      setBdg(["Score++", +bdg[1], bdg[2]]);
      setMsg(promptQuestion(userAge));
      inputRef.current.value = "";
    } else if (+userInput !== msg[1] && userInput != "") {
      setTimeout(() => {
        setBdg(["", bdg[1], +bdg[2] + 1]);
      }, 1000);
      setBdg(["wrong!", bdg[1], bdg[2]]);
      setMsg(promptQuestion(userAge));
      inputRef.current.value = "";
    }
  };

  let restart = () => {
    setMsg(["Enter your age", 0]);
    setBdg(["", 0, 0]);
  };

  let skip = () => {
    if (msg[0] !== "Enter your age") {
      setMsg(promptQuestion(userAge));
    }
  };

  return (
    <Prompt
      handleRef={inputRef}
      message={msg}
      badge={bdg}
      handleSubmit={HandleSubmit}
      handleExit={handleTask}
      handleReset={restart}
      handleSkip={skip}
    />
  );
}
export default Quiz;
