"use strict";

//import react and reactDom for browser rendering
import React from "react";
import ReactDom from "react-dom";

//this project
import ReactTournamentBracket from '/react/src/js/index';


//render example component
ReactDom.render(
    <ReactTournamentBracket teams={getTeams()} />,
    document.getElementById('app-container')
);



getTeams = () => {
    return [
        {
            name: 'vampires'
        },
        {
            name: 'gorillas'
        },
        {
            name: 'pornstars'
        },
        {
            name: 'clowns'
        }
    ];
}

