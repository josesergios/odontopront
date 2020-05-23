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
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
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
    path: 'patients-details',
    loadChildren: () => import('./patients/details/details.module').then( m => m.DetailsPageModule)
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
    path: 'users-list',
    loadChildren: () => import('./users/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'users-create',
    loadChildren: () => import('./users/create/create.module').then( m => m.CreatePageModule)
  },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
