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


export const getPossibleTestsFromActiveTests = (activeTests: Array<TestType>) => {

    if(activeTests.length >= 3) {
        return [];
    }

    if(activeTests.length > 0) {
        let possibleGhosts = getPossibleGhostTypesFromActiveTests(activeTests);
        let possibleTests = new Set<TestType>();
        possibleGhosts.forEach( ghost => 
            ghost.testTypes.forEach(test => possibleTests.add(test)))
        return Array.from(possibleTests.values());
    }


    return Object.entries(TestTypes)
        .map(([key, testType]) => testType)
        .filter((testType: TestType) => 
            !activeTests.find((activeTest: TestType) => activeTest === testType)
        );
}
