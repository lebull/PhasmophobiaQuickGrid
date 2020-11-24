import { IconProp } from "@fortawesome/fontawesome-svg-core"

export type GhostType = {
    name: string;
    description: string;
    summary: string;
    testTypes: Array<TestType>;
    strengths: Array<string>;
    weaknesses: Array<string>;
}

export type TestType = {
    name: string;
    description: string;
    icon: IconProp;
}

export type ItemCategoryType = {
    name: string,
}

export type ItemType = {
    name: string,
    usage: string,
    tips: Array<string>,
    categories: Array<ItemCategoryType>,
}

export type ContactType = {
    type: string;
    text: string;
    link: string;
    icon: IconProp;
}

export enum ChallengeDifficulty {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard",
}

export type ChallengeType = {
    title: string;
    description: string;
    difficulty: ChallengeDifficulty,
    forbiddenItems: ItemType[]
}