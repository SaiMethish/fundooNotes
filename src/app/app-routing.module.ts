import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BirthdayDetailsComponent } from './birthday-details/birthday-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { ArchiveContainerComponent } from './archive-container/archive-container.component';
import { TrashContainerComponent } from './trash-container/trash-container.component';
import { AuthGuard } from './service/auth/auth.guard';

const appRoutes: Routes = [
    { 
        path: 'register',
        component: RegisterComponent,

    },
    {path:'login', component:LoginComponent},
    {path:'birthdayDetails',component:BirthdayDetailsComponent},
    {
        path:'',
        component:DashboardComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path:'notes',
                component:NotesContainerComponent
            },
            {
                path:'archive',
                component:ArchiveContainerComponent
            },
            {
                path:'trash',
                component:TrashContainerComponent
            }
        ]
    }
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