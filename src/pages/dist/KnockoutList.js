"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.KnockoutList = exports.KnockoutTests = void 0;
var react_1 = require("react");
var adhoc_1 = require("../data/adhoc");
exports.KnockoutTests = function (_a) {
    var activeEvidence = _a.activeEvidence, onSelectTest = _a.onSelectTest;
    var possibleTests = Object.entries(adhoc_1.TestTypes)
        .map(function (_a) {
        var key = _a[0], testType = _a[1];
        return testType;
    })
        .filter(function (testType) {
        return !activeEvidence.find(function (activeEvidenceTest) { return activeEvidenceTest === testType; });
    });
    var getTestButtonClass = function (testType) {
        if (activeEvidence.includes(testType)) {
            return "is-success";
        }
        if (!possibleTests.includes(testType)) {
            return "is-disabled";
        }
        return "is-primary";
    };
    return (react_1["default"].createElement("div", { className: "tile is-4 is-vertical is-child" }, Object.entries(adhoc_1.TestTypes).map(function (_a) {
        var key = _a[0], testType = _a[1];
        return react_1["default"].createElement("button", { className: "button is-large is-fullwidth " + getTestButtonClass(testType), onClick: function () { return onSelectTest(testType); } }, testType.name);
    })));
};
exports.KnockoutList = function () {
    var _a = react_1.useState({
        config: {
            filterSelectedTests: false
        },
        activeEvidence: Array()
    }), state = _a[0], setState = _a[1];
    var selectEvidence = function (testType) {
        if (state.activeEvidence.find(function (evidenceName) { return evidenceName === testType; })) {
            setState(__assign(__assign({}, state), { activeEvidence: state.activeEvidence.filter(function (evidenceName) { return evidenceName !== testType; }) }));
        }
        else {
            if (state.activeEvidence.length < 3) {
                setState(__assign(__assign({}, state), { activeEvidence: __spreadArrays(state.activeEvidence, [testType]) }));
            }
        }
    };
    var possibleGhosts = adhoc_1.GhostTypes.filter(function (ghostType) {
        if (!state.activeEvidence) {
            return true;
        }
        //TODO: Reduce this shit please
        var remainingTests = 3 - state.activeEvidence.length;
        ghostType.testTypes.forEach(function (testType) {
            if (!state.activeEvidence.find(function (activeEvidenceTestType) { return activeEvidenceTestType === testType; })) {
                remainingTests--;
            }
        });
        return (remainingTests >= 0);
    });
    return react_1["default"].createElement("div", { className: "block" },
        react_1["default"].createElement("div", { className: "tile is-ancestor" },
            react_1["default"].createElement(exports.KnockoutTests, { activeEvidence: state.activeEvidence, onSelectTest: selectEvidence }),
            react_1["default"].createElement("div", { className: "tile is-parent" }, "GhostTypes")));
};
