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
exports.__esModule = true;
var index_1 = require("../constants/index");
function woodReducer(state, action) {
    switch (action.type) {
        case index_1.GAME_TICK:
            return __assign({}, state, { wood: state.wood + 1 });
        default:
            return state;
    }
}
exports.woodReducer = woodReducer;
