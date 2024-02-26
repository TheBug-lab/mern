import { useEffect, useRef, useState } from "react";
import sameBin, { calcBin } from "../utils/sameBin.js";
import Confirm from "./template/Confirm.jsx";
import { useNavigate } from "react-router-dom";

function Find() {
  let [msg, setMsg] = useState(["let me guess", 4]);
  let [month, setMonth] = useState([]);
  let [answer, setAnswer] = useState();
  let inputRef = useRef(null);
  let badge = "Does this panel contains month of your birth ?";
  let navigate = useNavigate();

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
      //let testing = calcBin([1, 1, 1, 1]);

      let buffer = calcBin(month);

      setMsg([calcBin(month), 4]);

      //console.log(typeof month[0]);
      //console.log(month);
      //console.log(buffer);
      //console.log(testing);
    } else {
      let message = sameBin(msg[1], 12).map((temp) => months[temp - 1]);
      let index = msg[1] - 1;
      setMsg([message.join(" "), index]);
    }
  };
  let restart = () => {
    let message = sameBin(4, 12).map((e) => months[e - 1]);
    setMsg([message.join(" "), 3]);
    setMonth([]);
  };

  return (
    <Confirm
      message={msg}
      badge={badge}
      handleAccept={HandleSubmit}
      handleReject={HandleSubmit}
      handleExit={() => navigate("/")}
      handleReset={restart}
    />
  );
}

export default Find;
