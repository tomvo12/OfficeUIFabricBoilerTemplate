import * as React from "react";
import * as ReactDOM from "react-dom";

import { initializeIcons } from '@uifabric/icons';

import { polyfill } from 'es6-promise';

import { App } from './App';

polyfill();

initializeIcons(undefined, { disableWarnings: true });

ReactDOM.render(
  <App />,
  document.getElementById("example")
);
