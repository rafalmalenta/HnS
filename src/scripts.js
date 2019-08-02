import "./styles/style.sass";
import React from "react";
import ReactDOM from "react-dom";
import Game from './Components/Game'
import todo from './Components/GameStore'

const app = document.getElementById("app");
//console.log(`store ${store}`)
ReactDOM.render(<Game store={todo} />,app)