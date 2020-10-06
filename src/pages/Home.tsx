import React from "react";
import { GhostTypes, TestTypes } from "../data/adhoc";
import { useAppState } from "../AppContext";

export const Home = () => {

    const { state, setState } = useAppState()!;

    //TODO:  I think this is where a reduce comes into play
    const addEvidenceType = (testType: string) => {
        if(state.activeEvidence) {
            setState({
                activeEvidence: [testType, ...state.activeEvidence]
            });
        } else {
            setState({
                activeEvidence: [testType]
            });
        }
    }

    return <div>
        <h1>Ghosts:</h1>
        <ul>
            { Object.entries(GhostTypes).map(([key, ghostType]) => {
                return (<li key={key}>{ghostType.name}</li>)
            })}
         </ul>
         <ul>
            { Object.entries(TestTypes).map(([key, testType]) => {
                return (
                    <li key={key} onClick={(e) => { addEvidenceType(testType.name) }}>
                        { state?.activeEvidence?.find(evidence => evidence === testType.name) ? <span>*</span> : null }
                        { testType.name }
                    </li>
                )
            })}
         </ul>
    </div>;
}