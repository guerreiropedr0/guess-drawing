import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorHandler() {
  const error = useRouteError();

  return (
    <div className="container-fluid d-flex flex-column align-items-center my-3">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
