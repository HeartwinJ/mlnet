import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent } from './projects/projects.component';
import { StorageComponent } from './storage/storage.component';
import { ModelsComponent } from './models/models.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SelectObjectiveComponent } from './select-objective/select-objective.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProjectsComponent,
    StorageComponent,
    ModelsComponent,
    CreateProjectComponent,
    SelectObjectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
