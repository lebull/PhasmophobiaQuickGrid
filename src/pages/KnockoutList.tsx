import React, { useState } from "react";
import { GhostTypes, ITestType, TestTypes } from "../data/adhoc";

interface IKnockoutTestsProps {
    activeEvidence: Array<ITestType>;
    onSelectTest(testType: ITestType) : void;
}

export const KnockoutTests = ({activeEvidence, onSelectTest} : IKnockoutTestsProps) => {
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
        <div className="tile is-4 is-vertical is-child">
            {Object.entries(TestTypes).map(([key, testType]) => 
                <button className={`button is-large is-fullwidth ${ getTestButtonClass(testType) }`}
                        onClick={() => onSelectTest(testType)}>
                    { testType.name }
                </button>
            )}
        </div>
    )
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

    let possibleGhosts = GhostTypes.filter((ghostType) => {
        if(!state.activeEvidence){
            return true;
        }

        //TODO: Reduce this shit please

        let remainingTests =  3 - state.activeEvidence.length;

        ghostType.testTypes.forEach(testType => {
            if(!state.activeEvidence.find( activeEvidenceTestType => activeEvidenceTestType === testType )){
                remainingTests--;
            }
        });

        return (remainingTests >= 0);
    });

    return <div className="block">
        <div className="tile is-ancestor">
            <KnockoutTests activeEvidence={state.activeEvidence} onSelectTest={selectEvidence} />
            <div className="tile is-parent">GhostTypes</div>
        </div>
    </div>
}