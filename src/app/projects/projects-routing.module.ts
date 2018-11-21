import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'project/:id', component: ProjectViewComponent }
        ]
      }
    ]
  }
  // {
  //   path: 'projects',
  //   component: ProjectListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
