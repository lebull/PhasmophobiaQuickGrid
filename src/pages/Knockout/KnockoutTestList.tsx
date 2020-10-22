import React from "react";
import { TestType } from "../../data/types";
import { TestTypes } from "../../data/adhoc";
import { getPossibleTestsFromActiveTests } from "./Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface IKnockoutTestListProps {
    activeTests: Array<TestType>;
    onSelectTest(testType: TestType) : void;
    className?: string;
}

export const KnockoutTestList = ({activeTests, onSelectTest, className} : IKnockoutTestListProps) => {
    
    let possibleTests = getPossibleTestsFromActiveTests(activeTests);

    const getTestButtonClass = (testType: TestType) => {
        if(activeTests.includes(testType)){
            return "is-success";
        }
        if(!possibleTests.includes(testType)){
            return "is-disabled";
        }
        return "is-primary";
    }

    const TestButton = styled.button`
        justify-content: flex-start;
    `;

    return (
        <div className={className}>
            {Object.entries(TestTypes).map(([key, testType]) => 
                <TestButton key={key} className={`button is-large is-fullwidth my-1 has-text-left ${ getTestButtonClass(testType) }`}
                        onClick={() => onSelectTest(testType)}
                        disabled={getTestButtonClass(testType) === "is-disabled"}>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={testType.icon} />
                    </span>
                    <span>
                        { testType.name }
                    </span>
                </TestButton>
            )}
        </div>
    )
}
