import React from "react";
import { Alert } from "react-bootstrap";

function Message({ setMessage, type, msg }) {
  return (
    <Alert variant={type} className={!msg ? "d-none" : ""}>
      {msg}
      <button
        type="button"
        className="btn-close"
        aria-label="Cerrar"
        onClick={() => setMessage(null)}
      ></button>
    </Alert>
  );
}

export default Message;
