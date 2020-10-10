import React, { useState } from "react";
import { GhostTypes, ITestType, TestTypes } from "../data/adhoc";

export const KnockoutList = () => {

    const [state, setState] = useState({
        filterSelectedTests: false,
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

    let possibleTests = Object.entries(TestTypes)
        .map(([key, testType]) => testType);

    if(state.filterSelectedTests) {
        possibleTests = possibleTests.filter(testType => 
            !state.activeEvidence.find(activeEvidenceTest => activeEvidenceTest === testType)
        );
    }

    const getTestButtonClass = (testType: ITestType) => {
        if(!possibleTests.includes(testType)){
            return "is-disabled"
        }
        return state.activeEvidence.includes(testType) ? "is-success" : "is-primary";
    }

    return <div>
        <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical">
                {Object.entries(TestTypes).map(([key, testType]) => 

                        <button className={`button is-large is-fullwidth ${ getTestButtonClass(testType) }`}
                                onClick={() => selectEvidence(testType)}>
                            { testType.name }
                        </button>
            
                )}
            </div>
            <div className="tile">GhostTypes</div>

        </div>
    </div>
}