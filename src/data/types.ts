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