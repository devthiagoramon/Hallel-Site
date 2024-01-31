import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StrictMode } from "react";
import FeedBackHallel from "./components/FeedBackHallel";

const root = ReactDOM.createRoot(document.getElementById("root"));
const notification = ReactDOM.createRoot(
  document.getElementById("notification")
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

notification.render(
  <StrictMode>
      {/*<FeedBackHallel/>*/}
  </StrictMode>
)

export {notification}
