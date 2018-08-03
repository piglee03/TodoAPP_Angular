import { Component } from '@angular/core';
import { UpdateListService } from './update-list.service';
import {NgForm} from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { NgRedux } from '../../node_modules/@angular-redux/store';
import { IAppState } from '../store';
import { TodoActions } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-list';
  id = 1;
  // constructor(private updateListService: UpdateListService) {}
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TodoActions) { }

  update(text: string, date: string ): void {
    // this.updateListService.addItem(this.id++, text);
    this.ngRedux.dispatch(this.actions.add(this.id++, text, date));
    console.log(date);
  }

  onSubmit(form: NgForm) {
    // this.updateListService.addItem(this.id++, form.value.text);
    this.ngRedux.dispatch(this.actions.add(this.id++, form.value.text, form.value.date));
    console.log(form.value);
    form.reset();
  }
}
