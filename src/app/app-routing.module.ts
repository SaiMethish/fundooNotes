import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BirthdayDetailsComponent } from './birthday-details/birthday-details.component';

const appRoutes: Routes = [
    { 
        path: 'register',
        component: RegisterComponent,

    },
    {path:'login', component:LoginComponent},
    {path:'birthdayDetails',component:BirthdayDetailsComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}