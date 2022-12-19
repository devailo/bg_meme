import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { AuthModule } from './auth/auth.module';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule } from '@angular/common/http';
import { AppInterceptorProvider } from './app-interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { CoreModule } from './core/core.module';
import { API_ERROR } from './shared/constants';
import { BehaviorSubject } from 'rxjs';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    AppInterceptorProvider,
    {
      provide: API_ERROR,
      useValue: new BehaviorSubject(null)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
