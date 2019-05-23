import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { RatesTableComponent } from './rates-table/rates-table.component';
import { AppRoutingModule } from './app-routing.module';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RatesTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgScrollbarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
