import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { MainComponent } from './main/main.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path:'',component:CommonComponent},
  {path:'main',component:MainComponent},
  {path:'posts',component:PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
