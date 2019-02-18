import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface GameTick {
    type: constants.GAME_TICK;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | GameTick;

export type GameTickAction = GameTick;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

export function gameTick(): GameTick {
    return {
        type: constants.GAME_TICK
    }

}
