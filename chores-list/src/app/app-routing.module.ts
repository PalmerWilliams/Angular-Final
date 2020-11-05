import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoreAddComponent } from './chore-add/chore-add.component';
import { ChoreEditComponent } from './chore-edit/chore-edit.component';
import { ChoreTasksComponent } from './chore-tasks/chore-tasks.component';

const routes: Routes = [
  { path: "", redirectTo: "task", pathMatch: "full" },
  { path: "task", component: ChoreTasksComponent },
  { path: "add", component: ChoreAddComponent },
  { path: "edit/:id", component: ChoreEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
