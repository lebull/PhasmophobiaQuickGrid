import React from "react";
import { GhostType, TestType } from "../../data/types";
import { GhostTypes } from "../../data/adhoc";
import { getPossibleGhostTypesFromActiveTests } from "./Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IKnockoutGhostListProps {
    activeTests: Array<TestType>;
    className?: string;
}

export const KnockoutGhostList = ({activeTests, className}: IKnockoutGhostListProps) => {

    let possibleGhosts = getPossibleGhostTypesFromActiveTests(activeTests);

    return <div className={`columns is-multiline ${className}`}>
        { GhostTypes.map((ghostType: GhostType) => 
            <KnockoutGhost 
                ghostType={ghostType}
                activeTests={activeTests}
                disabled={!possibleGhosts.includes(ghostType)}
            />) 
        }
    </div>
}

interface IKnockoutGhostProps {
    ghostType: GhostType,
    activeTests: Array<TestType>,
    disabled?: boolean
}

const KnockoutGhost = ({ghostType, activeTests, disabled=false} : IKnockoutGhostProps) => {
    return <div className={`column is-one-third ${disabled? "is-hidden" : ""}`}>
        <div className="box is-primary is-fullwidth">
            <h4 className="title is-4">{ghostType.name}</h4>
            <p>{ghostType.description}</p>
            <div className="level">
                {ghostType.testTypes.map(testType => 
                    <span className={`level-item icon is-large ${activeTests.includes(testType) ? "has-text-dark" : "has-text-success"}`}>
                        <FontAwesomeIcon icon={testType.icon} size="lg" />
                    </span>
                )}
            </div>
        </div>
    </div>
}