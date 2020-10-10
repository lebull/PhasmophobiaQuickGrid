import React, { useState } from "react";
import { GhostTypes, IGhostType, ITestType, TestTypes } from "../data/adhoc";

interface IKnockoutTestListProps {
    activeEvidence: Array<ITestType>;
    onSelectTest(testType: ITestType) : void;
    className?: string;
}

export const KnockoutTestList = ({activeEvidence, onSelectTest, className} : IKnockoutTestListProps) => {
    let possibleTests = Object.entries(TestTypes)
        .map(([key, testType]) => testType)
        .filter((testType: ITestType) => 
            !activeEvidence.find((activeEvidenceTest: ITestType) => activeEvidenceTest === testType)
        );

    const getTestButtonClass = (testType: ITestType) => {

        if(activeEvidence.includes(testType)){
            return "is-success";
        }

        if(!possibleTests.includes(testType)){
            return "is-disabled";
        }
        return "is-primary";
    }

    return (
        <div className={className}>
            {Object.entries(TestTypes).map(([key, testType]) => 
                <button className={`button is-large is-fullwidth ${ getTestButtonClass(testType) }`}
                        onClick={() => onSelectTest(testType)}>
                    { testType.name }
                </button>
            )}
        </div>
    )
}

interface IKnockoutGhostListProps {
    className?: string;
}

const KnockoutGhostList = ({className}: IKnockoutGhostListProps) => {
    return <div className={className}>
        {GhostTypes.map((ghostType: IGhostType) => <KnockoutGhost ghostType={ghostType} />)}
    </div>
}

interface IKnockoutGhostProps {
    ghostType: IGhostType
}

const KnockoutGhost = ({ghostType} : IKnockoutGhostProps) => {
    return <div className="box">
        <h3 className="title is-3">{ghostType.name}</h3>
    </div>
}

export const KnockoutList = () => {

    const [state, setState] = useState({
        config: {
            filterSelectedTests: false,
        },
        activeEvidence: Array<ITestType>()
    });

    const selectEvidence = (testType: ITestType) => {
        if(state.activeEvidence.find(evidenceName => evidenceName === testType)){
            setState({
                ...state,
                activeEvidence: state.activeEvidence.filter(evidenceName => evidenceName !== testType)
            });
        } else {
            if(state.activeEvidence.length < 3){
                setState({
                    ...state,
                    activeEvidence: [...state.activeEvidence, testType]
                });
            }
        }
    }

    // let possibleGhosts = GhostTypes.filter((ghostType) => {
    //     if(!state.activeEvidence){
    //         return true;
    //     }

    //     //TODO: Reduce this shit please

    //     let remainingTests =  3 - state.activeEvidence.length;

    //     ghostType.testTypes.forEach(testType => {
    //         if(!state.activeEvidence.find( activeEvidenceTestType => activeEvidenceTestType === testType )){
    //             remainingTests--;
    //         }
    //     });

    //     return (remainingTests >= 0);
    // });

    return <div className="block">
        <div className="columns">
            <KnockoutTestList className="column is-one-third" activeEvidence={state.activeEvidence} onSelectTest={selectEvidence} />
            <KnockoutGhostList className="column is-two-thirds"/>
        </div>
    </div>
}