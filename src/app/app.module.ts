import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './core/shared-modules/material.module';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { ServiceWorkerModule }  from '@angular/service-worker';
import { environment }          from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
