import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router";
import { GhostTypes } from "../data/adhoc";

export const Ghost = () => {

    interface ParamTypes {
        name: string
    }
    let { name } = useParams<ParamTypes>();

    let ghost = Object.entries(GhostTypes)
        .map(([key, ghost]) => ghost)
        .find(ghost => ghost.name === name);

    if (!ghost) {
        return <div>Placeholder 404</div>
    }

    return (
        <div>
            <h1>
                {ghost.name}
            </h1>
            <div className="columns">
                <div className="column">
                    <p className="box p-5">
                        {ghost.description}
                    </p>
                </div>
                <div className="column is-one-third">
                    <div className="box">
                        <div className="block">
                            <h2>Strengths</h2>
                            <ul>
                                {ghost.strengths.map((weakness, index) => { debugger; return <li key={index}>{weakness}</li>; })}
                            </ul>
                        </div>
                        <div className="block">
                            <h2>Weaknesses</h2>
                            <ul>
                                {ghost.weaknesses.map((weakness, index) => <li key={index}>{weakness}</li>)}
                            </ul>
                        </div>
                        <div className="block">

                            <h2>Evidence</h2>
                            {ghost.testTypes.map((test, index) => <div key={index}>
                                <div className="columns">
                                    <span className="column is-1"><FontAwesomeIcon icon={test.icon} size="lg" /></span>
                                    <span className="column">{test.name}</span>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>

                </div>

            </div>





        </div>
    );
};