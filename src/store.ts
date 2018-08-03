import { Action } from 'redux';
import { TodoActions } from './app/app.actions';
import {Todo} from './app/todo';

export interface IAppState {
    todoList: Todo[];
}

export const INITIAL_STATE: IAppState = {
    todoList: []
};

export function rootReducer(lastState: IAppState, action: any): IAppState {
    /*
    const id = 0;
    const text = '';
    const date = '';
    */
    let tempList = lastState.todoList;
    const index = tempList.findIndex(item => item.id === action.data.id);
    switch (action.type) {
        case TodoActions.ADD:
            tempList.push({
                id: action.data.id,
                text: action.data.text,
                date: action.data.date,
                isDone: false
            });
            break;

        case TodoActions.DELETE:
            tempList.splice(index, 1);
            break;

        case TodoActions.REVERSE:
            tempList[index].isDone = !tempList[index].isDone;
            break;

        default:
            return lastState;
    }



    return {
        todoList : tempList
    };
}
