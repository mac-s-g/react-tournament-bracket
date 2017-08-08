"use strict";

//import react and reactDom for browser rendering
import React from "react";
import ReactDom from "react-dom";

//this project
import ReactTournamentBracket from '/react/src/js/index';

const e = () => {console.log('FJDLKSFJKDJKLJKFDSLJ')}
e()

//render example component
ReactDom.render(
    <ReactTournamentBracket />,
    document.getElementById('app-container')
);

