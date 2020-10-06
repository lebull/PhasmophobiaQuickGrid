import React, { useState } from "react";
import { GhostTypes, ITestType, TestTypes } from "../data/adhoc";

export const Grid = () => {

    const [state, setState] = useState({
        activeEvidence: Array<ITestType>()
    });

    const selectEvidence = (testType: ITestType) => {
        if(state.activeEvidence.find(evidenceName => evidenceName === testType)){
            setState({
                activeEvidence: state.activeEvidence.filter(evidenceName => evidenceName !== testType)
            });
        } else {
            if(state.activeEvidence.length < 3){
                setState({
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
        .map(([key, testType]) => testType)
        .filter(testType => 
            !state.activeEvidence.find(activeEvidenceTest => activeEvidenceTest === testType)
        );

    return <div>
        <ul>
            { state.activeEvidence.map(testType => <li onClick={()=>selectEvidence(testType)}>{testType.name}</li>) }
        </ul>
        <table>
            <thead>
                <th></th>
                { possibleTests.map(testType => <th key={testType.name} onClick={()=>selectEvidence(testType)}>{testType.name}</th>) }
            </thead>
            {Object.entries(possibleGhosts).map(([key, ghostType]) => { 
                return(
                    <tr>
                        <td key={key}>{ghostType.name}</td>
                        { possibleTests.map(testType => <td key={`${testType.name}-${ghostType.name}`}>
                            { ghostType.testTypes.find((ghostTestType) => testType === ghostTestType ) ? "x" : ""}
                        </td>) }
                    </tr>
                )
            })}
        </table>
    </div>

    
}