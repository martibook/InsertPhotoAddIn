/* global document, Office, module, require */

import TaskPane from "./components/TaskPane";
import { AppContainer } from "react-hot-loader";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import * as React from "react";
import * as ReactDOM from "react-dom";

initializeIcons();

let isOfficeInitialized = false;

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component isOfficeInitialized={isOfficeInitialized} />
    </AppContainer>,
    document.getElementById("container")
  );
};

/* Render application after Office initializes */
Office.onReady(() => {
  isOfficeInitialized = true;
  render(TaskPane);
});

/* Initial render showing a progress bar */
render(TaskPane);

if (module.hot) {
  module.hot.accept("./components/TaskPane", () => {
    const NextApp = require("./components/TaskPane").default;
    render(NextApp);
  });
}
