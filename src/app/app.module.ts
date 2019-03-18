//angular
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { LoginComponentComponent } from './componnets/login-component/login-component.component';
import { PageNotFoundComponent } from './componnets/page-not-found/page-not-found.component';
import { HomeComponentComponent } from './componnets/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    PageNotFoundComponent,
    HomeComponentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
