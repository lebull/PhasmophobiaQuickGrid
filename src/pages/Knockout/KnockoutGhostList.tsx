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

    const GhostIconLevel = styled.footer`
        //border-top: solid 1px rgba(255, 255, 255, 0.1);
    `;


    return <div className={`column is-4-desktop is-6-tablet ${disabled? "is-hidden" : ""}`}>
        <GhostTile className="card is-primary is-fullwidth">
            <header className="card-header"> <h2 className="is-2 card-header-title">{ghostType.name}</h2></header>
            
            <GhostTileInfo className="card-content">{ghostType.summary}</GhostTileInfo>

            <GhostIconLevel className="level is-mobile card-footer">
                {ghostType.testTypes.map((testType: TestType, index: number) => 
                    <span key={index} className={`level-item icon is-large ${activeTests.includes(testType) ? "has-text-dark" : "has-text-warning"}`}>
                        <FontAwesomeIcon icon={testType.icon} size="2x" />
                    </span>
                )}
            </GhostIconLevel>
        </GhostTile>
    </div>
}