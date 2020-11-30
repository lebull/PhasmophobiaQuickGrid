import React from "react";
import { getChallenges } from "../../data/adhoc";
import { ChallengeDifficulty, ChallengeType, ItemType } from "../../data/types";

export const Challenges = () => {
    return <div className="columns is-multiline">
        {getChallenges().map((challenge) =>
            <div key={challenge.title} className="column is-4-desktop is-6-tablet"><Challenge challenge={challenge} /></div>
        )}
    </div>
}

interface ChallengeProps {
    challenge: ChallengeType
}
export const Challenge = ({ challenge }: ChallengeProps) => {
    const getDifficultyColor = () => {
        if (challenge.difficulty === ChallengeDifficulty.Easy) {
            return "success"
        }
        if (challenge.difficulty === ChallengeDifficulty.Medium) {
            return "warning"
        }
        if (challenge.difficulty === ChallengeDifficulty.Hard) {
            return "danger"
        }
        return "primary"
    }


    return <div className="card m-3">
        <div className="card-content">
            <p className="title">{challenge.title}</p>
            <p>
                <div className="tags has-addons">
                    <span className="tag is-black">
                        Difficulty
                    </span>
                    <span className={`tag is-${getDifficultyColor()}`}>
                        {challenge.difficulty}
                    </span>
                </div>
            </p>
            <p>{challenge.description}</p>
            <p><ForbiddenItems forbiddenItems={challenge.forbiddenItems} /></p>
        </div>
    </div>
}

interface ForbiddenItemsProps {
    forbiddenItems: ItemType[]
}

const ForbiddenItems = ({ forbiddenItems }: ForbiddenItemsProps) => {
    if (!forbiddenItems || !forbiddenItems.length) {
        return null;
    }
    return <p>
        <h3 className="title is-3">Forbidden Items</h3>
        <ul>
            {forbiddenItems.map((item) => <li key={item.name}>{item.name}</li>)}
        </ul>
    </p>

}