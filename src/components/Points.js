"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
require("../css/Hello.css");
var Points = /** @class */ (function (_super) {
    __extends(Points, _super);
    function Points(props) {
        return _super.call(this, props) || this;
    }
    Points.prototype.render = function () {
        var _a = this.props, name = _a.name, points = _a.points, onIncrement = _a.onIncrement, onDecrement = _a.onDecrement;
        return (<div className="hello">
                <div className="greeting">
                    Hello {name + points}
                </div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>);
    };
    return Points;
}(React.Component));
exports["default"] = Points;
