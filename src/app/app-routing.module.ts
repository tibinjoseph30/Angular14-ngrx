import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full',
  },
  { path: 'counter',
    loadChildren: () => import('./modules/counter/counter.module').then(m => m.CounterModule)
  },
  { path: 'posts',
    loadChildren: () => import('./modules/posts/post-list/post-list.module').then(m => m.PostListModule)
  },
  { path: 'add-post',
    loadChildren: () => import('./modules/posts/add-post/add-post.module').then(m => m.AddPostModule)
  },
  { path: 'edit-post/:id',
    loadChildren: () => import('./modules/posts/edit-post/edit-post.module').then(m => m.EditPostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
