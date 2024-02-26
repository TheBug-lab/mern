function Prompt({
  message,
  badge,
  handleSkip,
  handleReset,
  handleExit,
  handleSubmit,
  handleRef,
}) {
  return (
    <div className="prompt">
      <div className={"badge"}>
        <span className="left">
          <h3>Points: {badge[1]}</h3>
          <h3>Fails: {badge[2]}</h3>
        </span>
        <span className={badge[0] && "pop"}>
          <h2>{badge[0]}</h2>
        </span>
        <span className={`right ${badge[0] && "pop"}`}>
          <h3>High Score</h3>
          <h3> {badge[3]}</h3>
        </span>
      </div>
      <h2>{message[0]}</h2>
      <form onSubmit={handleSubmit}>
        <input ref={handleRef} autoFocus className="placeHolder"></input>
        <br />
        <a onClick={handleSubmit} className="btn-primary">
          Enter
        </a>
      </form>
      <div className="panel">
        <a
          onClick={() => {
            handleExit({ id: 0 });
          }}
        >
          Exit
        </a>
        <a
          onClick={() => {
            handleSkip();
          }}
        >
          skip
        </a>
        <a
          onClick={() => {
            handleReset();
          }}
        >
          restart
        </a>
      </div>
    </div>
  );
}
export default Prompt;
