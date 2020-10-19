import React from "react";
import { GhostType, TestType } from "../../data/types";
import { GhostTypes } from "../../data/adhoc";
import { getPossibleGhostTypesFromActiveTests } from "./Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export interface IKnockoutGhostListProps {
    activeTests: Array<TestType>;
    className?: string;
}

export const KnockoutGhostList = ({activeTests, className}: IKnockoutGhostListProps) => {

    let possibleGhosts = getPossibleGhostTypesFromActiveTests(activeTests);

    return <div className={`columns is-multiline ${className}`}>
        { GhostTypes.map((ghostType: GhostType, index: number) => 
            <KnockoutGhost 
                key={index}
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

    const GhostTile = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
    `;

    const GhostTileInfo = styled.p`
        flex-grow: 1;
    `;

    return <div className={`column is-4-desktop is-6-tablet ${disabled? "is-hidden" : ""}`}>
        <GhostTile className="box is-primary is-fullwidth">
            <h4 className="title is-4">{ghostType.name}</h4>
            <GhostTileInfo>{ghostType.summary}</GhostTileInfo>
            <div className="level is-mobile">
                {ghostType.testTypes.map((testType: TestType, index: number) => 
                    <span key={index} className={`level-item icon is-large ${activeTests.includes(testType) ? "has-text-dark" : "has-text-warning"}`}>
                        <FontAwesomeIcon icon={testType.icon} size="2x" />
                    </span>
                )}
            </div>
        </GhostTile>
    </div>
}