import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { ProfesorGuard } from './guards/profesor.guard';
import { AlumnoGuard } from './guards/alumno.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'geneqr',
    loadChildren: () => import('./pages/geneqr/geneqr.module').then( m => m.GeneqrPageModule),
    canActivate:[IngresadoGuard, ProfesorGuard]
  },
  {
    path: 'readqr',
    loadChildren: () => import('./pages/readqr/readqr.module').then( m => m.ReadqrPageModule),
    canActivate:[IngresadoGuard, AlumnoGuard]
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate:[IngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
