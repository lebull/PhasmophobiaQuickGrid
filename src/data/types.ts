export type GhostType = {
    name: string;
    description: string;
    testTypes: Array<TestType>;
    strengths: Array<string>;
    weaknesses: Array<string>;
}

export type TestType = {
    name: string;
    description: string;
    icon?: string;
}