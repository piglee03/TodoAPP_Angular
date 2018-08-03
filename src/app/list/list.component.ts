import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../todo';
import { UpdateListService } from '../update-list.service';
import { NgRedux } from '../../../node_modules/@angular-redux/store';
import { IAppState } from '../../store';
import { TodoActions } from '../app.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy {
  list: Todo[];
  subscription;
  // constructor(private updateListService: UpdateListService) { }
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TodoActions) {
      this.subscription = ngRedux.select<Todo[]>('todoList')
      .subscribe(newList => this.list = newList);
    }

  ngOnInit() {  }

  /*
   *getList(): void {
   *  // this.list = this.updateListService.getList();
   *}
   */

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delItem(id: number): void {
    // this.updateListService.delItem(id);
    this.ngRedux.dispatch(this.actions.delete(id));
  }

  flagReverse(id: number): void {
    // this.updateListService.doneReverse(id);
    this.ngRedux.dispatch(this.actions.reverse(id));
  }
}
