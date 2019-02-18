import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import {INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, GAME_TICK} from '../constants/index';

export function pointReducer(state: number = 1, action: EnthusiasmAction) {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return state + 1;
        case DECREMENT_ENTHUSIASM:
            return Math.max(1, state - 1);
        case GAME_TICK:
            return state + 1;
        default:
            return state;
    }
}