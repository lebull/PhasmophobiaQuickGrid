import React from "react";
import { GhostType, TestType } from "../../data/types";
import { GhostTypes } from "../../data/adhoc";

export interface IKnockoutGhostListProps {
    activeTests: Array<TestType>;
    className?: string;
}

export const KnockoutGhostList = ({className}: IKnockoutGhostListProps) => {
    return <div className={`columns is-multiline ${className}`}>
        { GhostTypes.map((ghostType: GhostType) => <KnockoutGhost ghostType={ghostType} />) }
    </div>
}

interface IKnockoutGhostProps {
    ghostType: GhostType
}

const KnockoutGhost = ({ghostType} : IKnockoutGhostProps) => {
    return <div className="column is-one-third card">
        <div className="card-content">
            <h4 className="title is-4">{ghostType.name}</h4>
        </div>
    </div>
}