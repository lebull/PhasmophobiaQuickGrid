import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { TestType } from "../../data/types";
import { KnockoutGhostList } from "./KnockoutGhostList";
import { KnockoutTestList } from "./KnockoutTestList";

export const Knockout = () => {

    const [state, setState] = useState({
        config: {
            filterSelectedTests: false,
        },
        activeTests: Array<TestType>()
    });

    const selectTest = (selectedTestType: TestType) => {
        if(state.activeTests.find(activeTest => activeTest === selectedTestType)){
            setState({
                ...state,
                activeTests: state.activeTests.filter(activeTest => activeTest !== selectedTestType)
            });
        } else {
            if(state.activeTests.length < 3){
                setState({
                    ...state,
                    activeTests: [...state.activeTests, selectedTestType]
                });
            }
        }
    }

    const resetTest = () => {
        setState({
            ...state,
            activeTests: Array<TestType>()
        });
    }

    return <div className="block">
        <div className="level">
            <div className="level-left"></div>
            <div className="level-right">
                <button className={`button is-warning is-outlined is-large my-1 level-item`}
                        onClick={resetTest}
                    >
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faRedo} />
                    </span>
                    <span>
                        Reset
                    </span>
                </button>
            </div>
        </div>
        <div className="columns">
            <KnockoutTestList className="column is-narrow-tablet" activeTests={state.activeTests} onSelectTest={selectTest} />
            <KnockoutGhostList className="column" activeTests={state.activeTests}/>
        </div>
    </div>
}
