import React from "react";
import { TestType } from "../../data/types";
import { TestTypes } from "../../data/adhoc";

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
