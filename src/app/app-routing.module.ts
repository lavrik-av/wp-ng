import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path : "products",
    loadChildren : () => import( './modules/woo/woo.module' ).then( module => module.WooModule )
  },
  {
    path : "posts",
    loadChildren : () => import( './modules/posts/posts.module' ).then( module => module.PostsModule )
  },
  {
    path : "users",
    loadChildren : () => import( './modules/users/users.module' ).then( module => module.UsersModule )
  },
  {
    path : "**",
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
