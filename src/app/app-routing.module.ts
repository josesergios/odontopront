import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'patients-list',
    loadChildren: () => import('./patients/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'patients-create',
    loadChildren: () => import('./patients/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'patients-details/:id',
    loadChildren: () => import('./patients/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'records-list',
    loadChildren: () => import('./records/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'records-create/:id',
    loadChildren: () => import('./records/create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'records-details/:id',
    loadChildren: () => import('./records/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'users-list',
    loadChildren: () => import('./users/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'users-create',
    loadChildren: () => import('./users/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'measurements/:id',
    loadChildren: () => import('./records/measurements/measurements.module').then( m => m.MeasurementsPageModule)
  },
  {
    path: 'procedures/:id',
    loadChildren: () => import('./records/procedures/procedures.module').then( m => m.ProceduresPageModule)
  },
  {
    path: 'files/:id',
    loadChildren: () => import('./records/files/files.module').then( m => m.FilesPageModule)
  },
  {
    path: 'users-details/:id',
    loadChildren: () => import('./users/details/details.module').then( m => m.DetailsPageModule)
  },






];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
