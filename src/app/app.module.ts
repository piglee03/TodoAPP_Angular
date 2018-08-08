import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // prevent page refresh
import { NgReduxModule, NgRedux } from '@angular-redux/store'; // using angular-redux
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

import { rootReducer, IAppState, INITIAL_STATE } from './redux/store';
import { TodoActions } from './redux/app.actions';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgReduxModule,
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
