"use strict";
exports.__esModule = true;
require("bootstrap/dist/css/bootstrap.min.css");
require("./css/index.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
var React = require("react");
var ReactDOM = require("react-dom");
var PointsContainer_1 = require("./containers/PointsContainer");
var Navigation_1 = require("./components/Navigation");
var Center_1 = require("./components/Center");
var Header_1 = require("./components/Header");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var index_1 = require("./reducers/index");
var index_2 = require("./actions/index");
var rootReducer = redux_1.combineReducers({
    points: index_1.pointReducer
});
var store = redux_1.createStore(rootReducer, {
    points: 1,
    languageName: 'Points'
});
ReactDOM.render(<react_redux_1.Provider store={store}>
        <Header_1.default />
        <div className="container-fluid text-center">
            <div className="row content">
                <Navigation_1.default />
                <Center_1.default />
                <div id={"right"} className="col-sm-2 sidenav">
                    <div className="well">
                        <p>ADS</p>
                    </div>
                    <div className="well">
                        <p>ADS</p>
                    </div>
                </div>
            </div>
        </div>

        <footer className="container-fluid text-center">
            <p>Footer Text</p>
        </footer>
        <PointsContainer_1.default />
    </react_redux_1.Provider>, document.getElementById('root'));
function tick() {
    store.dispatch(index_2.gameTick());
    requestAnimationFrame(tick);
}
tick();
