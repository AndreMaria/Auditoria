import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AutocompliteComponent } from './autocomplite/autocomplite.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DocumentoComponent } from './documento/documento.component';
import { CheckboxlistComponent } from './checkboxlist/checkboxlist.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DocumentoFormComponent } from './documento/documento-form/documento-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { docRouting } from './documento/documento.routing';
import { userRouting } from './usuario/usuario.routing'; 
import { loginRouting } from './login/login.routing';
import { LogoffComponent } from './login/logoff/logoff.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutocompliteComponent,
    DropdownComponent,
    DocumentoComponent,
    CheckboxlistComponent,
    LoginComponent,
    NotFoundComponent,
    NavBarComponent,
    DocumentoFormComponent,
    UsuarioComponent,
    UsuarioFormComponent,
    LogoffComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    docRouting,
    userRouting,
    loginRouting,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
