import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/PointsContainer';
import Navigation from './components/Navigation';
import Center from './components/Center';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { combineReducers, createStore} from 'redux';
import { pointReducer } from './reducers/index';
import { StoreState } from './types/index';
import {gameTick} from './actions/index';

const rootReducer = combineReducers({
    points : pointReducer,
});

const store = createStore<StoreState,any,any,any>(rootReducer as any, {
    points: 1,
    languageName: 'Points',
});


ReactDOM.render(
    <Provider store={store}>
        <Header/>
        <div className="container-fluid text-center">
            <div className="row content">
                <Navigation/>
                <Center/>
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
        <Hello />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

function tick() {
    store.dispatch(gameTick());
    requestAnimationFrame(tick)
}

tick();
