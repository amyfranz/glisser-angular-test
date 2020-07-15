import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BioComponent } from './bio/bio.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { EditNameComponent } from './edit-name/edit-name.component';
import { EditBioComponent } from './edit-bio/edit-bio.component';
import { FormsModule } from '@angular/forms';
import { EditFormService } from './services/edit-form.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BioComponent,
    EditFormComponent,
    EditNameComponent,
    EditBioComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule],
  providers: [EditFormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
