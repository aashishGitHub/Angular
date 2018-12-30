import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const userRoutes: Routes = [
{path: 'login', component: LoginComponent}
];

@NgModule({
    declarations:[LoginComponent],
    imports:[
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    providers:[]

})
export class UserModule{};