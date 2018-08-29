import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // prevent page refresh
import { NgReduxModule, NgRedux } from '@angular-redux/store'; // using angular-redux

import { rootReducer, IAppState, INITIAL_STATE } from './redux/store';
import { TodoActions } from './redux/app.actions';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { GitapiComponent } from './gitapi/gitapi.component';
import { ListComponent } from './todo/list.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    GitapiComponent,
    ListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgReduxModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoActions],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
    );
  }
}
