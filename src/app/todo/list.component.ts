import { Component } from '@angular/core';
import { Todo } from '../redux/todo';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../redux/store';
import { TodoActions } from '../redux/app.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @select('todoList') readonly list$: Observable<Todo[]>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TodoActions
  ) {}

  delItem(id: number): void {
    this.ngRedux.dispatch(this.actions.delete(id));
  }

  flagReverse(id: number): void {
    this.ngRedux.dispatch(this.actions.reverse(id));
  }
}
