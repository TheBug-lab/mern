function Confirm({
  message,
  handleExit,
  handleReset,
  handleReject,
  handleAccept,
}) {
  return (
    <div className="prompt confirm">
      <h2>Does this panel contains your month of birth ?</h2>
      <div className="badge">
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
