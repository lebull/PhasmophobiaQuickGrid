import React from "react";
import { GhostType, TestType } from "../../data/types";
import { GhostTypes } from "../../data/adhoc";
import { getPossibleGhostTypesFromActiveTests } from "./Helpers";

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
                disabled={!possibleGhosts.includes(ghostType)}
            />) 
        }
    </div>
}

interface IKnockoutGhostProps {
    ghostType: GhostType,
    disabled?: boolean
}

const KnockoutGhost = ({ghostType, disabled=false} : IKnockoutGhostProps) => {
    return <div className={`column is-one-third ${disabled? "is-hidden" : ""}`}>
        <div className="box is-primary is-fullwidth">
            <h4 className="title is-4">{ghostType.name}</h4>
            <p>{ghostType.description}</p>
        </div>
    </div>
}