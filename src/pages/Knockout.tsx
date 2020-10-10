import React, { useState } from "react";
import { GhostType, TestType, GhostTypes, TestTypes } from "../data/adhoc";

interface IKnockoutTestListProps {
    activeTests: Array<TestType>;
    onSelectTest(testType: TestType) : void;
    className?: string;
}

export const KnockoutTestList = ({activeTests, onSelectTest, className} : IKnockoutTestListProps) => {
    let possibleTests = Object.entries(TestTypes)
        .map(([key, testType]) => testType)
        .filter((testType: TestType) => 
            !activeTests.find((activeTest: TestType) => activeTest === testType)
        );

    const getTestButtonClass = (testType: TestType) => {

        if(activeTests.includes(testType)){
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
    activeTests: Array<TestType>;
    className?: string;
}

const KnockoutGhostList = ({className}: IKnockoutGhostListProps) => {
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
            <KnockoutTestList className="column is-one-quarter" activeTests={state.activeTests} onSelectTest={selectTest} />
            <KnockoutGhostList className="column is-two-quarters" activeTests={state.activeTests}/>
        </div>
    </div>
}

// Helpers

const getPossibleGhostTypesFromActiveTests = (activeTests: Array<TestType>) =>
    GhostTypes.filter((ghostType) => {
        if(!activeTests){
            return true;
        }

        //TODO: Reduce this shit please

        let remainingTests =  3 - activeTests.length;

        ghostType.testTypes.forEach(testType => {
            if(!activeTests.find( activeTest => activeTest === testType )){
                remainingTests--;
            }
        });

        return (remainingTests >= 0);
    });


const getPossibleTestsFromActiveTests = (activeTests: Array<TestType>) => 
    Object.entries(TestTypes)
        .map(([key, testType]) => testType)
        .filter((testType: TestType) => 
            !activeTests.find((activeTest: TestType) => activeTest === testType)
        );
