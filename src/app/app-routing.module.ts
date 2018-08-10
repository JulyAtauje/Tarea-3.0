import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post_list/post_list.component';
import { PostDetailComponent } from './post/post_detail/post-detail.component';
import { PostAddComponent } from './post/post_add/post_add.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
   path: 'posts',
   component: LayoutComponent,
   children: [
     {
      path: 'list',
      component: PostListComponent
     },
     {
      path: 'add',
      component: PostAddComponent
     },
     {
      path: 'detail/:id',
      component: PostDetailComponent
     }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
