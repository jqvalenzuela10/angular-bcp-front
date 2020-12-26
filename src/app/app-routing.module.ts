import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigGeneralComponent } from './components/config-general/config-general.component';
import { ConfigNotificacionesComponent } from './components/config-notificaciones/config-notificaciones.component';
import { ConfigComponent } from './components/config/config.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TransferDepositosComponent } from './components/transaccion/transfer-depositos/transfer-depositos.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginPageComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
    ]
  },
  { 
    path: 'app', 
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { 
        path: 'transfer', 
        component: TransferComponent ,
        children: [
          { path: 'deposito', component: TransferDepositosComponent }
        ]
      },
      { 
        path: 'config', 
        component: ConfigComponent,
        children: [
          { path: 'general', component: ConfigGeneralComponent },
          { path: 'notificaciones', component: ConfigNotificacionesComponent }
        ]
      }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
