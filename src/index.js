import React from "react";
import ReactDOM from "react-dom";
import X from "./app";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <X/>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
