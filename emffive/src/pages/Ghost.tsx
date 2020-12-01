import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { GhostTypes } from "../data/adhoc";
import { GhostType } from "../data/types";

export const Ghosts = () => {
    const ghosts: GhostType[] = Object.entries(GhostTypes)
        .map(([key, ghost]) => ghost);
    return <div>
        {ghosts.map(ghost => <Ghost key={ghost.name} ghostName={ghost.name} />)}
    </div>
}

interface GhostParams {
    ghostName?: string
}

const Ghost = ({ ghostName }: GhostParams) => {
    let ghost = Object.entries(GhostTypes)
        .map(([key, ghost]) => ghost)
        .find(ghost => ghost.name === ghostName);

    if (!ghost) {
        return <div>Ghost {ghostName} does not exist.</div>
    }

    return (
        <div className="card mb-5">
            <div className="card-content">
                <div className="columns">
                    <div className="column">
                        <p className="title">
                            {ghost.name}
                        </p>
                        <p className="content">
                            {ghost.description}
                        </p>
                        
                    </div>
                    <div className="column is-one-third">
                        <div className="">
                            <h2>Strengths</h2>
                            <ul>
                                {ghost.strengths.map((weakness, index) => <li key={index}>{weakness}</li>)}
                            </ul>
                            <h2>Weaknesses</h2>
                            <ul>
                                {ghost.weaknesses.map((weakness, index) => <li key={index}>{weakness}</li>)}
                            </ul>
                            <h2>Evidence</h2>
                            <ul>
                                {ghost.testTypes.map((test, index) => <li key={index}>
                                    <div className="columns">
                                        <span className="column is-1"><FontAwesomeIcon icon={test.icon} size="lg" /></span>
                                        <span className="column">{test.name}</span>
                                    </div>
                                </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};