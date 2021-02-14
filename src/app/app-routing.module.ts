import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelsComponent } from './models/models.component';
import { ProjectsComponent } from './projects/projects.component';
import { StorageComponent } from './storage/storage.component';

const routes: Routes = [
  {path: '', redirectTo: 'projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent },
  {path: 'storage', component: StorageComponent },
  {path: 'models', component: ModelsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
