import React from "react";
import { GhostTypes } from "../data/adhoc";

export const Home = () => {
    return <div>
        <h1>Ghosts:</h1>
        <ul>
            { Object.entries(GhostTypes).map(([key, ghostType]) => {
                return (<li>{ghostType.name}</li>)
            })}
         </ul>
    </div>;
}