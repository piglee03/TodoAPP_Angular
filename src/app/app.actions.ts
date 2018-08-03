import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class TodoActions {
    static ADD = 'ADD';
    static DELETE = 'DELETE';
    static REVERSE = 'REVERSE';

    add(id: Number, text: String, date: String) {
        return {type: TodoActions.ADD,
        data: {
            id: id,
            text: text,
            date: date
        }
        };
    }

    delete(id: Number) {
        return {type: TodoActions.DELETE,
        data: {
            id: id
        }
        };
    }

    reverse(id: Number) {
        return {type: TodoActions.REVERSE,
        data: {
            id : id
        }
        };
    }
}
