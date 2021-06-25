import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-mui";

import App from "./app";
//redux
import { Provider } from "react-redux";
import store from "../src/redux/store";
//styles
import "./index.css";
import "../src/style/main.css";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
