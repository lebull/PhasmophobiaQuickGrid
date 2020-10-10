"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Header = function () {
    return react_1["default"].createElement("nav", { className: "navbar", role: "navigation", "aria-label": "main navigation" },
        react_1["default"].createElement("div", { className: "navbar-brand" },
            react_1["default"].createElement("a", { className: "navbar-item", href: "https://bulma.io" },
                react_1["default"].createElement("img", { src: "https://bulma.io/images/bulma-logo.png", alt: "logo", width: "112", height: "28" })),
            react_1["default"].createElement("button", { className: "navbar-burger burger", "aria-label": "menu", "aria-expanded": "false", "data-target": "navbarBasicExample" },
                react_1["default"].createElement("span", { "aria-hidden": "true" }),
                react_1["default"].createElement("span", { "aria-hidden": "true" }),
                react_1["default"].createElement("span", { "aria-hidden": "true" }))),
        react_1["default"].createElement("div", { className: "navbar-menu" },
            react_1["default"].createElement("div", { className: "navbar-start" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/", className: "navbar-item" }, "Home"))));
};
exports.Layout = function (_a) {
    var children = _a.children;
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement(Header, null),
        react_1["default"].createElement("div", { className: "container" }, children),
        react_1["default"].createElement("div", null, "Footer"));
};
