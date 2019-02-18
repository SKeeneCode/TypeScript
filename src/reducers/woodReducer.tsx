import { GameTickAction } from '../actions';
import { StoreState } from '../types/index';
import {GAME_TICK} from '../constants/index';

export function woodReducer(state: StoreState, action: GameTickAction): StoreState {
    switch (action.type) {
        case GAME_TICK:
            return { ...state, wood: state.wood + 1 };
        default:
            return state;
    }
}