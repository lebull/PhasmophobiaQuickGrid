import React from "react";
import { GhostType, TestType } from "../../data/types";
import { GhostTypes } from "../../data/adhoc";

export interface IKnockoutGhostListProps {
    activeTests: Array<TestType>;
    className?: string;
}

export const KnockoutGhostList = ({className}: IKnockoutGhostListProps) => {
    return <div className={className}>
        {GhostTypes.map((ghostType: GhostType) => <KnockoutGhost ghostType={ghostType} />)}
    </div>
}

interface IKnockoutGhostProps {
    ghostType: GhostType
}

const KnockoutGhost = ({ghostType} : IKnockoutGhostProps) => {
    return <div className="box">
        <h3 className="title is-3">{ghostType.name}</h3>
    </div>
}