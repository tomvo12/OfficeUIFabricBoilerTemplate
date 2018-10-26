import * as React from "react";

import { Hello } from "./components/Hello";
import { Menu } from './components/Menu';


export const App = () => (
    <div>
        <Menu />
        <Hello compiler="Typescript" framework="React"/>
    </div>
);