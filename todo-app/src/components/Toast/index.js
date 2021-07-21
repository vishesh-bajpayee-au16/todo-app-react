const Toast = ({ message }) => {
  const show = message ? "show" : "";
  return (
    <div
      className={`toast ${show} align-items-center`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{message}</div> 
      </div>
    </div>
  );
};

export default Toast;
