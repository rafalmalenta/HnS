import "./styles/style.sass";
import React from "react";
import ReactDOM from "react-dom";

import Webpage from "./Components/Webpage"


const app = document.getElementById("app");
//console.log(`store ${store}`)
ReactDOM.render(<Webpage />,app)