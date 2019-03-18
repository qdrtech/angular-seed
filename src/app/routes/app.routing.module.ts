import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponentComponent } from '../componnets/login-component/login-component.component';
import { PageNotFoundComponent } from '../componnets/page-not-found/page-not-found.component';
import { HomeComponentComponent } from '../componnets/home-component/home-component.component';

const routes: Routes = [
    { path : '', component: HomeComponentComponent},
    { path: 'login', component: LoginComponentComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }