import React from "react";
import { Spinner } from "react-bootstrap";

function ComponentLoader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "360px", width: "100%", background: "#fff" }}
    >
      <Spinner animation="border" role="status" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default ComponentLoader;
