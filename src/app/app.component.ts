import { Component } from '@angular/core';
// import { UpdateListService } from './update-list.service';
import { NgForm } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './redux/store';
import { TodoActions } from './redux/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TodoActions) { }
}
