import { Member } from "./member-model";
import  * as MemberActions from "./member-actions";

function memberReducer(state = initialState, action: MemberActions.All): State {
    switch (action.type) {
        case MemberActions.ADD: {
            return Object.assign({}, state, { players: [...state.players, action.payload] })
        };
        case MemberActions.REMOVE: {
            return Object.assign({}, state, { players: state.players.filter(p => p.email != action.payload) })
        };
        default: {
            return state;
        }
    }
}

export const Reducers:any = {
    member : memberReducer
}

export interface State {
    players: Member[];
    jackpot: number;
    currentPlayer: string;
}

const initialState: State = {
    players: [],
    jackpot: 0,
    currentPlayer: ''
}


export function selectMembers(state: any) {
    console.log(JSON.stringify(state));
    return state.member.players;
}
