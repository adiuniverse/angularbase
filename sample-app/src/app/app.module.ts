import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KeroselComponent } from './kerosel/kerosel.component';
import { DigitalFestComponent } from './digital-fest/digital-fest.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SortPipe } from './pipe/app.sort';
import { CountspecialcharPipe } from './pipe/app.count';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReusableLoginComponent } from './reusable-login/reusable-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    NavbarComponent,
    KeroselComponent,
    DigitalFestComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    SortPipe,
    CountspecialcharPipe,
    ReactiveComponent,
    ReusableLoginComponent,
    StudentLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
