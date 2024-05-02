import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import JobStore from "./data/Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*------------------ REDUX STORE PROVIDER------------------------ */}
    <Provider store={JobStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
