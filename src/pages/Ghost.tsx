import React from "react";
import { useParams } from "react-router";
import { GhostTypes } from "../data/adhoc";

export const Ghost = () => {
    
    interface ParamTypes {
        name: string
      }
    let { name } = useParams<ParamTypes>();

    let ghost = Object.entries(GhostTypes)
        .map(([key, ghost]) => ghost )
        .find(ghost => ghost.name === name);

    if(!ghost){
        return <div>Placeholder 404</div>
    }

    return (
        <div>
            <h1>
                { ghost.name }
            </h1>
            <h2>Strengths</h2>
            <ul>
                 { ghost.weaknesses.map( (weakness, index) => { debugger; return <li key={index}>{ weakness }</li>; } ) }
            </ul>
            <h2>Weaknesses</h2>
            <ul>
                 { ghost.weaknesses.map( (weakness, index) => <li key={index}>{weakness}</li> ) }
            </ul>
            <p>
                { ghost.description }
            </p>
            <h2>Evidence</h2>
            <ul>
                { ghost.testTypes.map((test, index) => <li key={index}>{test.name}</li>) }
            </ul>
        </div>
    );
};