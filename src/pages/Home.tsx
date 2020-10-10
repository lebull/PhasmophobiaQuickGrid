import React from "react";
import { Link } from "react-router-dom";
import { GhostTypes } from "../data/adhoc";
import { KnockoutList } from "./KnockoutList";

export const Home = () => {

    return <div>
        {/* <h1>Ghosts:</h1>
        <ul>
            { Object.entries(GhostTypes).map(([key, ghostType]) => {
                return (<li><Link to={`/ghost/${ghostType.name}`}>{ ghostType.name }</Link></li>)
            })}
         </ul> */}
         <KnockoutList />
    </div>;
}