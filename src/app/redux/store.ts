import { TodoAction, TodoActions } from './app.actions';
import { Action } from 'redux';
import { Todo } from './todo';

export interface IAppState {
    todoList: Todo[];
}

export const INITIAL_STATE: IAppState = {
    todoList: []
};

export function rootReducer(lastState: IAppState = INITIAL_STATE, a: Action): IAppState {
    const action = a as TodoAction;

    switch (action.type) {
        case TodoActions.ADD:
            return {
                todoList: lastState.todoList.concat({
                    id: action.payload.id,
                    text: action.meta.text,
                    date: action.meta.date,
                    isDone: false
                })
            };

        case TodoActions.DELETE:
            return {
                todoList: lastState.todoList.filter(item => item.id !== action.payload.id)
            };

        case TodoActions.REVERSE:
            return {
                todoList: lastState.todoList.map(
                    item => item.id === action.payload.id
                    ? { ...item, isDone: !item.isDone }
                    : item
                )
            };

        default:
            return lastState;
    }

}
