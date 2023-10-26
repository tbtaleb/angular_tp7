import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './app1/accueil/accueil.component';
import { ContactComponent } from './app1/contact/contact.component';
import { ErreurComponent } from './app1/erreur/erreur.component';
import { MenuComponent } from './app1/menu/menu.component';
import { VetementsComponent } from './app1/clothes/vetements/vetements.component';
import { ChaussuresComponent } from './app1/shoes/chaussures/chaussures.component';
import { EteComponent } from './app1/clothes/ete/ete.component';
import { HiverComponent } from './app1/clothes/hiver/hiver.component';
import { BabyComponent } from './app1/shoes/baby/baby.component';
import { WomenComponent } from './app1/shoes/women/women.component';
import { MenComponent } from './app1/shoes/men/men.component';
import { AuthentifComponent } from './app2/authentif/authentif.component';
import { DashboardComponent } from './app2/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    ErreurComponent,
    MenuComponent,
    VetementsComponent,
    ChaussuresComponent,
    EteComponent,
    HiverComponent,
    BabyComponent,
    WomenComponent,
    MenComponent,
    AuthentifComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
