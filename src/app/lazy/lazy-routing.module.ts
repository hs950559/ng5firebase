import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent
    // children: [{
    //   path: '',
    //   component: PostComponent
    // },
    // {
    //   path: 'create',
    //   component: CreatePostComponent
    // },
    // {
    //   path: ':id',
    //   component: PostDetailComponent
    // }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
