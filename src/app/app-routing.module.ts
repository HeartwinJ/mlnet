import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ModelsComponent } from './models/models.component';
import { ProjectsComponent } from './projects/projects.component';
import { SelectObjectiveComponent } from './select-objective/select-objective.component';
import { StorageComponent } from './storage/storage.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'storage', component: StorageComponent },
      { path: 'models', component: ModelsComponent },
      { path: 'createProject', component: CreateProjectComponent },
      { path: 'selectObjective', component: SelectObjectiveComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
