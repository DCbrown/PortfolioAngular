import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'project/:id',  component: ProjectComponent},
  { path: 'contact',  component: ContactComponent}
]


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)  
  ],
  
})
export class AppRoutingModule { }
