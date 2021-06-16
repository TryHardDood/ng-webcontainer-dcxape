import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  HttpCacheInterceptorModule,
  useHttpCacheLocalStorage
} from '@ngneat/cashew';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),

    HttpClientModule,
    HttpCacheInterceptorModule.forRoot()
  ],
  providers: [useHttpCacheLocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule {}
