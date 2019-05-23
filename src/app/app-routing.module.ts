import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { RatesTableComponent } from './rates-table/rates-table.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';

const routes = [
  { path: 'login', component: AuthComponent },
  { path: 'echangeRates', component: RatesTableComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/echangeRates', pathMatch: 'full' },
  { path: '**', component: RatesTableComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
   exports: [RouterModule]
})
export class AppRoutingModule { }
