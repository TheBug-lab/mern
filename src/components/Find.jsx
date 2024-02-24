import { useEffect, useRef, useState } from "react";
import sameBin, { calcBin } from "./utils/sameBin.js";
import Confirm from "./template/Confirm.jsx";

function Find({ handleTask }) {
  let [msg, setMsg] = useState(["let me guess", 4]);
  let [month, setMonth] = useState([]);
  let [answer, setAnswer] = useState();
  let inputRef = useRef(null);

  let months = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    let message = sameBin(4, 12).map((e) => months[e - 1]);
    setMsg([message.join(" "), 3]);
  }, []);

  let HandleSubmit = (e) => {
    setMonth([e, ...month]);

    if (msg[1] === 0) {
      setMsg([calcBin[month], 4]);
    } else {
      let message = sameBin(msg[1], 12).map((temp) => months[temp - 1]);
      let index = msg[1] - 1;
      setMsg([message.join(" "), index]);
    }
  };
  let restart = () => {
    setMonth([]);
  };

  console.log(month);
  return (
    <Confirm
      message={msg}
      handleAccept={HandleSubmit}
      handleReject={HandleSubmit}
      handleExit={handleTask}
      handleReset={restart}
    />
  );
}

export default Find;
