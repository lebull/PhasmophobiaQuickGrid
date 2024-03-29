/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { faBolt, faBookOpen, faDotCircle, faEnvelope, faFingerprint, faTemperatureLow, faVolumeUp, faBraille } from "@fortawesome/free-solid-svg-icons";
import {TestType, GhostType, ItemType, ContactType, ChallengeType, ChallengeDifficulty} from "./types";


export const TestTypes  = {
    EMF: <TestType> {
        name: "EMF Level 5",
        description: "EMF has been seen at least once at the maximum level of 5.",
        icon: faBolt,
    },
    Temperature: <TestType> {
        name: "Temperature",
        description: "Temperature has been seen below 0degC.",
        icon: faTemperatureLow,
    },
    Fingerprints: <TestType> {
        name: "Fingerprints",
        description: "Fingerprints have been seen on walls, doors, or objects.  Footprints do NOT count.",
        icon: faFingerprint,
    },
    SpiritBox: <TestType> {
        name: "Spirit Box",
        description: "A voice has been heard on a SpiritBox.",
        icon: faVolumeUp,
    },
    GhostOrbs: <TestType> {
        name: "Ghost Orbs",
        description: "Ghostorbs have been seen in nightvision video.",
        icon: faDotCircle,
    },
    GhostWriting: <TestType> {
        name: "Ghost Writing",
        description: "Writing has been observed in a ghost writing book",
        icon: faBookOpen,
    },
    Dots: <TestType> {
        name: "DOTS",
        description: "Ghost silhouttes can be seen in this grid of lights",
        icon: faBraille,
    }
};

export const ItemCategories = {
    Illumination: {
        name: "Illumination"
    },
    Measurement: {
        name: "Measurement"
    },
    Monitoring: {
        name: "Monitoring"
    },
    Defence: {
        name: "Defence"
    },
    Utility: {
        name: "Utility"
    },
}

export const ItemTypes = {
    EMFReader: <ItemType> {
        name : "EMF Reader",
        usage : "Detect EMF Disturbances",
        categories: [ItemCategories.Measurement],

    },
    FlashLight: <ItemType> {
        name : "Flashlight",
        usage : "Provide Illumination",
        categories: [ItemCategories.Illumination],
    },
    StrongFlashLight: <ItemType> {
        name : "Strong Flashlight",
        usage : "Provide Illumination",
        categories: [ItemCategories.Illumination],
    },
    Candle: <ItemType> {
        name : "Candle",
        usage : "Provide Illumination",
        categories: [ItemCategories.Illumination],
    },
    Lighter: <ItemType> {
        name : "Lighter",
        usage : "Light Candles and smudgesticks",
        categories: [ItemCategories.Illumination, ItemCategories.Utility],
    },
    SmudgeSticks: <ItemType> {
        name : "Smudge Sticks",
        usage: "Clense an area",
        categories: [ItemCategories.Measurement],
    },
    Crucifix: <ItemType> {
        name : "Crucifix",
        usage : "Prevent Haunts",
        categories: [ItemCategories.Defence],
    },
    WritingBook: <ItemType> {
        name : "Writing Book",
        usage : "Detect Ghost Writing",
        categories: [ItemCategories.Measurement],
    },
    SpiritBox: <ItemType> {
        name : "Spirit Box",
        usage : "Detect Ghost Writing",
        categories: [ItemCategories.Measurement],
    },
    Salt: <ItemType> {
        name : "Salt",
        usage : "Detect footsteps from ghosts",
        categories: [ItemCategories.Defence],
    },
    UVLight: <ItemType> {
        name : "UV Light",
        usage: "Detect fingerprints and footprints",
        categories: [ItemCategories.Illumination, ItemCategories.Measurement],
    },
    VideoCamera: <ItemType> {
        name: "Video Camera",
        usage: "Send Visible or Infradred video to the truck monitor",
        categories: [ItemCategories.Monitoring],
    },
    Tripod: <ItemType> {
        name: "Tripod",
        usage: "Provides a platform to mount a video camera.",
        categories: [ItemCategories.Utility],
    },
    PhotoCamera: <ItemType> {
        name: "Photo Camera",
        usage: "Taking pictures of evidence will result in monitary reward when the round completes",
        categories: [ItemCategories.Utility],
    },
    Thermometer: <ItemType> {
        name: "Thermometer",
        usage: "Detects low temperatures",
        categories: [ItemCategories.Measurement],
    },
    MotionSensor: <ItemType> {
        name: "Motion Sensor",
        usage: "Illuminates an area when motion is dectected in front of it",
        categories: [ItemCategories.Monitoring],
    },
    IRSensor: <ItemType> {
        name: "Infrared Sensor",
        usage: "Reports if a beam in front of it has been broken",
        categories: [ItemCategories.Monitoring],
    },
    SoundSensor: <ItemType> {
        name: "Sound Sensor",
        usage: "Detects sound that was created with a bounding area",
        categories: [ItemCategories.Monitoring],
    },
    ParabolicMicrophone: <ItemType> {
        name: "Parabolic Microphone",
        usage: "Detects sounds sources that come from a beam in front of the microphone",
        categories: [ItemCategories.Monitoring],
    },
    GlowStick: <ItemType> {
        name: "GlowStick",
        usage: "Casts a low UV light",
        categories: [ItemCategories.Illumination, ItemCategories.Measurement],
    },
    DotsProjector: <ItemType> {
        name: "D.O.T.S. Projector",
        usage: "A laser grid of light that can reveal the silhoutte of a ghost",
        categories: [ItemCategories.Illumination, ItemCategories.Measurement],
    },
}

export const getItemTypes = () => Object.entries(ItemTypes).map(([key, itemType]) => itemType);

export const GhostTypes = [
    <GhostType> {
        name: "Spirit",
        summary: "No strong characteristics, weak to smudge.",
        description: `A Spirit is the most common type of ghost in Phasmophobia. This doesn’t mean it isn’t a handful, however. Players should find Spirits at the sites of their unexplained deaths.`,
        testTypes: [TestTypes.EMF, TestTypes.SpiritBox, TestTypes.GhostWriting],
        strengths: [],
        weaknesses: ["Smudge Sticks"],
        notes: [
            "Smudge will increase the time between hunts",
            "Normally, when you use smudge within 6 meters of a ghost, it will not hunt for 90 seconds.  This is increased to 180 seconds for the spirit."
        ],
    },
    <GhostType> {
        name: "Wraith",
        summary: "Rarely touches the ground, weak to salt.",
        description: `A Wraith can fly, meaning you cannot track them with footsteps. Wraiths can travel through walls, too. Have some Salt on you to help with a Wraith attack; Wraiths don’t love Salt.`,
        testTypes: [TestTypes.EMF, TestTypes.SpiritBox, TestTypes.Dots],
        strengths: ["Cannot be tracked by footsteps"],
        weaknesses: ["Salt"],
        notes: [
            "Wraiths are the only ghost that do not leave footprints after stepping in salt",
            "A wraith stepping in salt will prematurely end the hunt",
            "A wraith stepping in salt will generally increase activity.",
            "Wraiths can see through doors and lockers (as well as travel through them).  Walls still break line of site."
        ],
    },
    <GhostType> {
        name: "Phantom",
        summary: "Drains sanity when looked at, briefly disappears with photos.",
        description: `Phantoms can possess the living, commonly summoned by an Ouija Board, instilling fear into anyone nearby. Remember to not look directly at a Phantom and set up your camera to take a photo (this will make it temporarily disappear).`,
        testTypes: [TestTypes.SpiritBox, TestTypes.Fingerprints, TestTypes.Dots],
        strengths: ["Simply looking at a Phantom will dramatically lower your sanity"],
        weaknesses: ["Photographing a Phantom"],
        notes: [
            "Sanity will drop when looking at it either during a manifestation or a hunt",
            "If a hunt is in progress, taking a photo will not end the hunt.",
            "Phantoms are less visible during a hunt, being visible every 1 to 2 seconds (normaly every 0 to 1.3 seconds)."
        ],
    },
    <GhostType> {
        name: "Poltergeist",
        summary: "Throws lots of things.",
        description: `Poltergeists can throw objects and generally cause a ruckus. Get one in an empty room, however, and they are a lot easier to deal with. Spirit Boxes, Fingerprints, and Ghost Orbs are evidence of a Poltergeist.`,
        testTypes: [TestTypes.SpiritBox, TestTypes.Fingerprints, TestTypes.GhostWriting],
        strengths: ["Can throw many different objects at once"],
        weaknesses: ["Empty rooms"],
        notes: [
            "This is the only ghost that can be identified with only 2 pieces of evidence (Ghost orbs and fingerprints)",
            "Poltergeist can throw many items at once (EMF 3).",
            "Sanity will drain for 2 times the number of items thrown, regardless if you are looking at it.",
            "Poltergeists can throw an item for twice the horizontal velocity than a normal ghost",
        ],
    },
    <GhostType> {
        name: "Banshee",
        summary: "Stalks a single individual, crucifix makes it less aggressive.",
        description: `A stalker of its individually chosen prey, a Crucifix nearby a Banshee will make it less aggressive.`,
        testTypes: [TestTypes.Fingerprints, TestTypes.GhostOrbs, TestTypes.Dots],
        strengths: ["Target one player at a time"],
        weaknesses: ["Fear of the Crucifix"],
        notes: [
            "Crucifix radius is 5 meters instead of 3 meters.",
            "Banshees only choose one target at a time.",
            "If the target leaves the building or is killed, the banshee will pick a new target",
            "A banshee can hunt/attack even when sanity is high.",
        ],
    },
    <GhostType> {
        name: "Jinn",
        summary: "Strong when around electrical power, weak when electrical power is removed.",
        description: `Fast, territorial ghosts.`,
        testTypes: [TestTypes.EMF, TestTypes.Fingerprints, TestTypes.Temperature],
        strengths: ["Jinns are faster when players are far away from them"],
        weaknesses: ["Turn off the location’s power source to stop a Jinn from using its ability"],
        notes: [
            "Turning off the powersource (breaker) will reduce it's speed when far away",
            "Jinn's tend to be very territorial",
        ],
    },
    <GhostType> {
        name: "Mare",
        summary: "Prefers dark.  More aggressive in the dark, less aggressive in the light.",
        description: `Make sure you turn the lights on as this ghost is stronger in the dark.`,
        testTypes: [TestTypes.SpiritBox, TestTypes.GhostOrbs, TestTypes.GhostWriting],
        strengths: ["Increased chance of attacking in the dark"],
        weaknesses: ["Light sources (turn the lights on, use torches, etc…)"],
        notes: [
            "When the mare is in the dark, it has twice the chance to hunt (almost as agressive as a demon)",
            "Lights on will reduce the chance of a hunt",
            "Mares tend to try to turn the lights off but rarely turn them on",
        ],
    },
    <GhostType> {
        name: "Revenant",
        summary: "Slow when it can't see its victim, fast when it can.",
        description: `A slow, violent ghost that picks up tremendous speed when hunting its prey. Remember to hide.`,
        testTypes: [TestTypes.GhostOrbs, TestTypes.GhostWriting, TestTypes.Temperature],
        strengths: ["When hunting a victim, it is quick, faster than anything"],
        weaknesses: ["Hiding from a Revenant makes it move very slowly"],
        notes: [
            "This is the only ghost that too fast to run away from during a hunt.  Players must hide."
        ]
    },
    <GhostType> {
        name: "Shade",
        summary: "Usually doesn't hunt when around multiple people.",
        description: `A shy ghost, make sure to travel in a group.`,
        testTypes: [TestTypes.EMF, TestTypes.GhostWriting, TestTypes.Temperature],
        strengths: ["Shyness makes it hard to find"],
        weaknesses: ["If there are multiple players nearby, a Shade will not enter into hunting mode"],
        notes: [],
    },
    <GhostType> {
        name: "Demon",
        summary: "You'll know it",
        description: `Demons are the most aggressive ghost.`,
        testTypes: [TestTypes.Fingerprints, TestTypes.GhostWriting, TestTypes.Temperature],
        strengths: ["Demons attack more than any other ghost type"],
        weaknesses: ["Ask Demons successful questions on the Ouija Board. This won’t lower a player’s sanity"],
        notes: [
            
        ],
    },
    <GhostType> {
        name: "Yurei",
        summary: "Drains sanity fast, weak to smudge.",
        description: `Yureis have a big effect on your sanity.`,
        testTypes: [TestTypes.GhostOrbs, TestTypes.Temperature, TestTypes.Dots],
        strengths: ["Strong effect on a player’s sanity"],
        weaknesses: ["Smudge the room of a Yurei to stop it wandering around the location for a long time"],
        notes: [
            
        ],
    },
    <GhostType> {
        name: "Oni",
        summary: "More active when nearby players",
        description: `Another strong ghost that is more active when more players are around it.`,
        testTypes: [TestTypes.EMF, TestTypes.Temperature, TestTypes.Dots],
        strengths: ["More active when players are nearby", "Can move objects at great speed"],
        weaknesses: ["More active players will make an Oni easier to find and identify"],
        notes: [
            ""
        ],
    },
    <GhostType> {
        name: "Hantu",
        summary: "A rare ghost that can be found in hot climates. They are known to attack more often in cold weather",
        description: ` its Hunt behaviour dependence on the temperature. Their speed is fully based on the temperature of the rooms it goes through, so the speed change can be observed in the real time.`,
        testTypes: [TestTypes.Fingerprints, TestTypes.GhostOrbs, TestTypes.Temperature],
        strengths: ["Hantu moves faster in colder areas."],
        weaknesses: ["Hantu moves slower in warmer areas"],
        notes: [
            ""
        ],
    },
    <GhostType> {
        name: "Yokai",
        summary: "A common type of ghost that is attracted to human voices. They can usually be found haunting family homes.",
        description: ` It has been known to become aggressive towards the players, that being too loud near the ghost. These noises make it very active and could become a reason of the starting Hunt.`,
        testTypes: [TestTypes.SpiritBox, TestTypes.GhostOrbs, TestTypes.Dots],
        strengths: ["Talking near a Yokai will anger it and cause it to attack more often."],
        weaknesses: ["While hunting, it can only hear voices close to it."],
        notes: [
            ""
        ],
    },
    <GhostType> {
        name: "Goryo",
        summary: "Can only be seen using a video camera and D.O.T.S. Projector.",
        description: ` It tends to stick to a short distance from where it spawns.`,
        testTypes: [TestTypes.EMF, TestTypes.Fingerprints, TestTypes.Dots],
        strengths: ["A Goryo will usually only show itself on camera if there are no people nearby."],
        weaknesses: ["They are rarely seen far from their place of death."],
        notes: [
            ""
        ],
    },
    <GhostType> {
        name: "Myling",
        summary: "Very noisy ghost",
        description: ` Tends to be very loud except when it is hunting.`,
        testTypes: [TestTypes.EMF, TestTypes.Fingerprints, TestTypes.GhostWriting],
        strengths: ["Quieter while hunting."],
        weaknesses: ["Makes more paranormal sounds than other ghosts."],
        notes: [
            ""
        ],
    },
];

export const ContactLinks: Array<ContactType> = [
    {
        type: "Email",
        text: "bulldogboy912000@yahoo.com",
        link: "mailto:bulldogboy912000@yahoo.com",
        icon: faEnvelope,
    },
];

export const Challenges = {
    NoClosedDoors: <ChallengeType> {
        title: "No Closed Doors",
        description: "During a hunt, open doors may not be closed",
        difficulty: ChallengeDifficulty.Medium,
    },
    NoFlashlight: <ChallengeType> {
        title: "No Flashlights",
        description: "Flashlights and uv lights may not be used",
        difficulty: ChallengeDifficulty.Medium,
        forbiddenItems: [ItemTypes.FlashLight, ItemTypes.UVLight, ItemTypes.StrongFlashLight],   
    },
    NoThermometer: <ChallengeType> {
        title: "No Thermometer",
        description: "Thermometers may not be used",
        difficulty: ChallengeDifficulty.Easy,
        forbiddenItems: [ItemTypes.Thermometer],
    },
    BoyScoutRule: <ChallengeType> {
        title: "Boyscout Rule",
        description: "The building must be left in the same state (or better) as when you arrived.  No left items, thrown objects must be replaced if possible.",
        difficulty: ChallengeDifficulty.Hard,
    },
    // https://www.reddit.com/r/PhasmophobiaGame/comments/jlptol/phasmophobia_challenges_list/
    BigBrother: <ChallengeType> {
        title: "Big Brother",
        description: "Only one player is allowed in the house at a time",
        difficulty: ChallengeDifficulty.Easy,
    },
    IsDexterIll: <ChallengeType> {
        title: "Is Dexter Ill?",
        description: "No items allowed until you reach zero sanity",
        difficulty: ChallengeDifficulty.Hard,
    },
    RadioSilence: <ChallengeType> {
        title: "Radio Silence",
        description: "Players may not use walkie-talkies",
        difficulty: ChallengeDifficulty.Medium,
    }
    // NoCommunication: <ChallengeType> {
    //     title: "No Communication",
    //     description: "Cannot communicate with teammates",
    //     difficulty: ChallengeDifficulty.Hard,
    // }
}


export const getChallenges = () => Object.entries(Challenges).map(([key, challenge]) => challenge);