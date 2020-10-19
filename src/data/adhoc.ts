/* eslint-disable @typescript-eslint/consistent-type-assertions */

import { faBolt, faBookOpen, faDotCircle, faFingerprint, faTemperatureLow, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import {TestType, GhostType, ItemType} from "./types";


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
    }
};

export const ItemCategories = {
    Illumination: {
        name: "Illumintation"
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
}

export const GhostTypes = [
    <GhostType> {
        name: "Spirit",
        description: `A Spirit is the most common type of ghost in Phasmophobia. This doesn’t mean it isn’t a handful, however. Players should find Spirits at the sites of their unexplained deaths.`,
        testTypes: [TestTypes.SpiritBox, TestTypes.Fingerprints, TestTypes.GhostWriting],
        strengths: [],
        weaknesses: ["Smudge Sticks"],
    },
    <GhostType> {
        name: "Wraith",
        description: `A Wraith can fly, meaning you cannot track them with footsteps. Wraiths can travel through walls, too. Have some Salt on you to help with a Wraith attack; Wraiths don’t love Salt.`,
        testTypes: [TestTypes.Fingerprints, TestTypes.Temperature, TestTypes.SpiritBox],
        strengths: ["Cannot be tracked by footsteps"],
        weaknesses: ["Salt"],
    },
    <GhostType> {
        name: "Phantom",
        description: `Phantoms can possess the living, commonly summoned by an Ouija Board, instilling fear into anyone nearby. Remember to not look directly at a Phantom and set up your camera to take a photo (this will make it temporarily disappear).`,
        testTypes: [TestTypes.EMF, TestTypes.GhostOrbs, TestTypes.Temperature],
        strengths: ["Simply looking at a Phantom will dramatically lower your sanity"],
        weaknesses: ["Photographing a Phantom"],
    },
    <GhostType> {
        name: "Poltergeist",
        description: `Poltergeists can throw objects and generally cause a ruckus. Get one in an empty room, however, and they are a lot easier to deal with. Spirit Boxes, Fingerprints, and Ghost Orbs are evidence of a Poltergeist.`,
        testTypes: [TestTypes.SpiritBox, TestTypes.Fingerprints, TestTypes.GhostOrbs],
        strengths: ["Can throw many different objects at once"],
        weaknesses: ["Empty rooms"],
    },
    <GhostType> {
        name: "Banshee",
        description: `A stalker of its individually chosen prey, a Crucifix nearby a Banshee will make it less aggressive.`,
        testTypes: [TestTypes.EMF, TestTypes.Fingerprints, TestTypes.Temperature],
        strengths: ["Target one player at a time"],
        weaknesses: ["Fear of the Crucifix"],
    },
    <GhostType> {
        name: "Jinn",
        description: `Fast, territorial ghosts.`,
        testTypes: [TestTypes.SpiritBox, TestTypes.GhostOrbs, TestTypes.EMF],
        strengths: ["Jinns are faster when players are far away from them"],
        weaknesses: ["Turn off the location’s power source to stop a Jinn from using its ability"],
    },
    <GhostType> {
        name: "Mare",
        description: `Make sure you turn the lights on as this ghost is stronger in the dark.`,
        testTypes: [TestTypes.SpiritBox, TestTypes.GhostOrbs, TestTypes.Temperature],
        strengths: ["Increased chance of attacking in the dark"],
        weaknesses: ["Light sources (turn the lights on, use torches, etc…)"],
    },
    <GhostType> {
        name: "Revenant",
        description: `A slow, violent ghost that picks up tremendous speed when hunting its prey. Remember to hide.`,
        testTypes: [TestTypes.EMF, TestTypes.Fingerprints, TestTypes.GhostWriting],
        strengths: ["When hunting a victim, it is quick, faster than anything"],
        weaknesses: ["Hiding from a Revenant makes it move very slowly"],
    },
    <GhostType> {
        name: "Shade",
        description: `A shy ghost, make sure to travel in a group.`,
        testTypes: [TestTypes.EMF, TestTypes.GhostOrbs, TestTypes.GhostWriting],
        strengths: ["Shyness makes it hard to find"],
        weaknesses: ["If there are multiple players nearby, a Shade will not enter into hunting mode"],
    },
    <GhostType> {
        name: "Demon",
        description: `Demons are the most aggressive ghost.`,
        testTypes: [TestTypes.SpiritBox, TestTypes.GhostWriting, TestTypes.Temperature],
        strengths: ["Demons attack more than any other ghost type"],
        weaknesses: ["Ask Demons successful questions on the Ouija Board. This won’t lower a player’s sanity"],
    },
    <GhostType> {
        name: "Yurei",
        description: `Yureis have a big effect on your sanity.`,
        testTypes: [TestTypes.GhostOrbs, TestTypes.GhostWriting, TestTypes.Temperature],
        strengths: ["Strong effect on a player’s sanity"],
        weaknesses: ["Smudge the room of a Yurei to stop it wandering around the location for a long time"],
    },
    <GhostType> {
        name: "Oni",
        description: `Another strong ghost that is more active when more players are around it.`,
        testTypes: [TestTypes.EMF, TestTypes.SpiritBox, TestTypes.GhostWriting],
        strengths: ["More active when players are nearby", "Can move objects at great speed"],
        weaknesses: ["More active players will make an Oni easier to find and identify"],
    },
];