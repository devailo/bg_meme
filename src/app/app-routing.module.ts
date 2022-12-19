import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';
import { NewPostComponent } from './features/new-post/new-post.component';
import { ProfileComponent } from './features/profile/profile.component';
import { AuthActivate } from './shared/guards/auth.activate';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Ново Меме',
      loginRequired: true
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Профил',
      loginRequired: true
    }
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
