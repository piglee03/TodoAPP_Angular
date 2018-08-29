import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { GitapiComponent } from './gitapi/gitapi.component';

const appRoutes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'gitapi', component: GitapiComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
