

import './index.css';
import { Provider } from "react-redux";
import App from './App';
import * as ReactDOM from "react-dom";

import store from "./store/store";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);