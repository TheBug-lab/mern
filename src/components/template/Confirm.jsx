function Confirm({
  message,
  badge,
  handleExit,
  handleReset,
  handleReject,
  handleAccept,
}) {
  return (
    <div className="confirm prompt">
      <h2>{badge}</h2>
      <div className="cfm-badge">
        <p>{message[0]}</p>
      </div>
      <form>
        <a
          className="btn-primary"
          onClick={() => {
            handleAccept(1);
          }}
        >
          Yes
        </a>
        <a className="btn-primary" onClick={() => handleReject(0)}>
          No
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
            handleReset();
          }}
        >
          restart
        </a>
      </div>{" "}
    </div>
  );
}
export default Confirm;
