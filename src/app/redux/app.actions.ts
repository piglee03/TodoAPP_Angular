import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';

interface Payload {
    id: Number;
}

interface MetaData {
    text: String;
    date: String;
}

export type TodoAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class TodoActions {
    static readonly ADD = 'ADD';
    static readonly DELETE = 'DELETE';
    static readonly REVERSE = 'REVERSE';

    add(id: Number, text: String, date: String): TodoAction {
        return {
            type: TodoActions.ADD,
            payload: {
                id: id
            },
            meta: {
                text: text,
                date: date
            }
        };
    }

    delete(id: Number): TodoAction {
        return {
            type: TodoActions.DELETE,
            payload: {
                id: id
            }
        };
    }

    reverse(id: Number): TodoAction {
        return {
            type: TodoActions.REVERSE,
            payload: {
                id : id
            }
        };
    }
}
