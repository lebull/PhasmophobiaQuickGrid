import React from "react";
import { GhostTypes, TestTypes } from "../data/adhoc";

export const Home = () => {

    return <div>
        <h1>Ghosts:</h1>
        <ul>
            { GhostTypes.map(ghostType => {
                return (<li key={ghostType.name}>{ghostType.name}</li>)
            })}
         </ul>
         <ul>
            { Object.entries(TestTypes).map(([key, testType]) => {
                return (
                    <li key={key}>
                        { testType.name }
                    </li>
                )
            })}
         </ul>
    </div>;
}