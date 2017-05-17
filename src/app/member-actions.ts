import { Action } from '@ngrx/store';
import { Member } from './member-model';

export const ADD = '[Member] Add';
export const ADD_SUCCESS = '[Member] Add Success';
export const REMOVE = '[Member] Remove';
export const REMOVE_SUCCESS = '[Member] Remove Success';


export class AddMember implements Action {
    readonly type = ADD;

    constructor(public payload: Member) { }
}

export class AddMemberSuccess implements Action {
    readonly type = ADD_SUCCESS;

    constructor(public payload: Member[]) { }
}

export class RemoveMember implements Action {
    readonly type = REMOVE;

    constructor(public payload: string) { }
}

export class RemoveMemberSuccess implements Action {
    readonly type = REMOVE_SUCCESS;

    constructor(public payload: Member[]) { }
}

export type All
    = AddMember
    | AddMemberSuccess
    | RemoveMember
    | RemoveMemberSuccess;
