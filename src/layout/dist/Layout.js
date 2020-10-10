"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.Layout = function (_a) {
    var children = _a.children;
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Home")))),
        children,
        react_1["default"].createElement("div", null, "Footer"));
};
