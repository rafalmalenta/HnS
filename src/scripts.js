import "./styles/style.sass";
import React from "react";
import ReactDOM from "react-dom";

import GameContainer from "./Components/GameContainer"


const app = document.getElementById("app");
//console.log(`store ${store}`)
ReactDOM.render(<GameContainer />,app)