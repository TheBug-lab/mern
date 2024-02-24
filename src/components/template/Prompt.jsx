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
      <div className={`${badge[0] && "pop"} badge`}>
        <h3>Points: {badge[1]}</h3>
        <h3>Fails: {badge[2]}</h3>
        <h2>{badge[0]}</h2>
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
