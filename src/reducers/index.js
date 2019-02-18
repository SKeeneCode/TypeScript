"use strict";
exports.__esModule = true;
var index_1 = require("../constants/index");
function pointReducer(state, action) {
    if (state === void 0) { state = 1; }
    switch (action.type) {
        case index_1.INCREMENT_ENTHUSIASM:
            return state + 1;
        case index_1.DECREMENT_ENTHUSIASM:
            return Math.max(1, state - 1);
        case index_1.GAME_TICK:
            return state + 1;
        default:
            return state;
    }
}
exports.pointReducer = pointReducer;
