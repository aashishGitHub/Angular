import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KycFormComponent } from 'src/app/user/kyc-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ButtonModule, DropdownModule, PanelModule, ProgressBarModule } from 'primeng/primeng';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/user/state/user.reducer';

const userRoutes: Routes = [
{path: 'login', component: LoginComponent},
{path: '', component: KycFormComponent}

];

@NgModule({
    declarations:[LoginComponent, KycFormComponent],
    imports:[
        ProgressBarModule,
        SharedModule,  
        RouterModule.forChild(userRoutes),
        StoreModule.forFeature('users',reducer)
    ],
    providers:[]

})
export class UserModule{};