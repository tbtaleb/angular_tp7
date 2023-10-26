import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './app1/accueil/accueil.component';
import { VetementsComponent } from './app1/clothes/vetements/vetements.component';
import { ChaussuresComponent } from './app1/shoes/chaussures/chaussures.component';
import { ContactComponent } from './app1/contact/contact.component';
import { ErreurComponent } from './app1/erreur/erreur.component';
import { EteComponent } from './app1/clothes/ete/ete.component';
import { HiverComponent } from './app1/clothes/hiver/hiver.component';
import { BabyComponent } from './app1/shoes/baby/baby.component';
import { WomenComponent } from './app1/shoes/women/women.component';
import { MenComponent } from './app1/shoes/men/men.component';
import { AuthentifComponent } from './app2/authentif/authentif.component';
import { DashboardComponent } from './app2/dashboard/dashboard.component';
import { authGuard } from './app2/auth.guard';

// const routes: Routes = [
//   {path:'home', title:'Acceuil',component:AccueilComponent},
//   {path:'clothes', title:'Vetements', component:VetementsComponent,
//     children:[
//       {path:'ete',title:'Habit Ete',component:EteComponent},
//       {path:'hiver',title:'Habit Hiver',component:HiverComponent},
//       {path:'', redirectTo:'ete', pathMatch:'full'},
//     ]
//   },
//   {path:'shoes',title:'Chaussures', component:ChaussuresComponent,
//     children:[
//       {path:'baby',title:'Chaussures pour Bébés',component:BabyComponent},
//       {path:'women',title:'Chaussures pour Femmes',component:WomenComponent},
//       {path:'men',title:'Chaussures pour Hommes',component:MenComponent},
//       {path:'', redirectTo:'women', pathMatch:'full'},
//     ]
//   },
//   {path:'contact', title:'Contact', component:ContactComponent},
//   {path:'', redirectTo:'home', pathMatch:'full'},
//   {path:'**', title:'Erreur', component:ErreurComponent}

// ];

const routes: Routes =[
  {path:'login', title:'Login',component:AuthentifComponent},
  {path:'dashboard', title:'Dashboard',component:DashboardComponent, canActivate:[authGuard]},

  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**', title:'Erreur', component:ErreurComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
