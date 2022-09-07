import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentBodyComponent } from './content-body/content-body.component';
import { ContentBody2Component } from './content-body2/content-body2.component';

const routes: Routes = [
  {path: '', component: ContentBodyComponent},
  {path: 'home', component: ContentBodyComponent},
  {path: 'body2', component: ContentBody2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
