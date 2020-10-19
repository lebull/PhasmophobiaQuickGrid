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

    return <div className="block">
        <div className="columns">
            <KnockoutTestList className="column is-one-quarter-desktop is-one-third-tablet" activeTests={state.activeTests} onSelectTest={selectTest} />
            <KnockoutGhostList className="column is-two-quarters-desktop is-two-thirds-tablet" activeTests={state.activeTests}/>
        </div>
    </div>
}
