"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var Ghost_1 = require("./pages/Ghost");
var Home_1 = require("./pages/Home");
var react_router_dom_1 = require("react-router-dom");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Home"))),
                react_1["default"].createElement(react_router_dom_1.Switch, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/ghost/:name" },
                        react_1["default"].createElement(Ghost_1.Ghost, null)),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/" },
                        react_1["default"].createElement(Home_1.Home, null)))))));
}
exports["default"] = App;
