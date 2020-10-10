"use strict";
exports.__esModule = true;
exports.Home = void 0;
var react_1 = require("react");
var KnockoutList_1 = require("./KnockoutList");
exports.Home = function () {
    return react_1["default"].createElement("div", { className: "panel" },
        react_1["default"].createElement(KnockoutList_1.KnockoutList, null));
};
