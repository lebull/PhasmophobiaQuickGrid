import { TestTypes, GhostTypes } from "../../data/adhoc";
import { TestType } from "../../data/types";


export const getPossibleGhostTypesFromActiveTests = (activeTests: Array<TestType>) =>
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


export const getPossibleTestsFromActiveTests = (activeTests: Array<TestType>) => 
    Object.entries(TestTypes)
        .map(([key, testType]) => testType)
        .filter((testType: TestType) => 
            !activeTests.find((activeTest: TestType) => activeTest === testType)
        );
