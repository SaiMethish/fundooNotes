import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { BirthdayDetailsComponent } from './birthday-details/birthday-details.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { ArchiveContainerComponent } from './archive-container/archive-container.component';
import { TrashContainerComponent } from './trash-container/trash-container.component';
import { NotecardComponent } from './notecard/notecard.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { FormsModule } from '@angular/forms';
import { ReminderComponent } from './reminder/reminder.component';
import { CreateEmailComponent } from './create-email/create-email.component';
import { SearchPipePipe } from './service/pipes/search-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BirthdayDetailsComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    NotesContainerComponent,
    ArchiveContainerComponent,
    TrashContainerComponent,
    NotecardComponent,
    AddnoteComponent,
    ReminderComponent,
    CreateEmailComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    AppRoutingModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
