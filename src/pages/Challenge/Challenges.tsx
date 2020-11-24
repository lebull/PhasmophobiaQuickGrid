import React from "react";
import { getChallenges } from "../../data/adhoc";
import { ChallengeType } from "../../data/types";

export const Challenges = () => {
    return <div>
        {getChallenges().map((challenge) => 
            <Challenge key={challenge.title} challenge={challenge}/>
        )}
    </div>
}

interface ChallengeProps {
    challenge: ChallengeType
}
export const Challenge = ({challenge} : ChallengeProps) => {
    return <div className="card m-3">
        <div className="card-content">
            <p className="title">{challenge.title}</p>
            <p>{challenge.description}</p>
        </div>
    </div>
}