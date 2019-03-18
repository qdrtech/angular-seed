import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponentComponent } from '../componnets/login-component/login-component.component';
import { AppComponent } from '../app.component';
import { PageNotFoundComponent } from '../componnets/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', component: LoginComponentComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }