import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersTasksComponent} from './Pages/UsersTasks/UsersTasks.component';
import {TasksComponent} from './Pages/Tasks/Tasks.component';

const routes: Routes = [
  { path: 'users', component: UsersTasksComponent },
  { path: 'tasksUser', component: TasksComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
