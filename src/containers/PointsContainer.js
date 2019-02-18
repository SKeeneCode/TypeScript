"use strict";
exports.__esModule = true;
var Points_1 = require("../components/Points");
var actions = require("../actions/");
var react_redux_1 = require("react-redux");
function mapStateToProps(_a) {
    var points = _a.points, languageName = _a.languageName;
    return {
        points: points,
        name: languageName
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: function () { return dispatch(actions.incrementEnthusiasm()); },
        onDecrement: function () { return dispatch(actions.decrementEnthusiasm()); }
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Points_1["default"]);
