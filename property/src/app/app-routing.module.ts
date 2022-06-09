import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PostadComponent } from './postad/postad.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { House1Component } from './house1/house1.component';
import { LandComponent } from './land/land.component';
import { CommercialComponent } from './commercial/commercial.component';
import { DashpostpropComponent } from './dashpostprop/dashpostprop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashqueriesComponent } from './dashqueries/dashqueries.component';
import { BuytypeofpropComponent } from './buytypeofprop/buytypeofprop.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GetcontactformComponent } from './getcontactform/getcontactform.component';
import { ViewComponent } from './view/view.component';
import { PostcommercialComponent } from './postcommercial/postcommercial.component';
import { PostlandComponent } from './postland/postland.component';
import { SelectposttypeComponent } from './selectposttype/selectposttype.component';




const routes: Routes = [
  {path: '',component:ListsComponent},
  {path:'lists',component:ListsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'postprop' ,component:SelectposttypeComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'service' ,component:ServicesComponent}, 
  {path:'akila',component:LoginformComponent},
  {path:'house1' , component:House1Component},
  {path:'selectprop' , component:BuytypeofpropComponent},
  {path:'land',component:LandComponent},
  {path:'commercial', component:CommercialComponent},
  {path:'rental' , component:ServicesComponent},
  {path:'land' , component:LandComponent},
  {path:'contact2' ,  component:ContactComponent},
  {path:'dashpost' , component:DashpostpropComponent},
  {path:'buy' , component:ServicesComponent},
  {path:'sell' , component:SelectposttypeComponent},
  {path:'commercial' , component:CommercialComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'queries' , component:DashqueriesComponent},
  {path:'posted' , component:DashpostpropComponent},
  {path:'buytypeofprop' , component:BuytypeofpropComponent},
  {path:'signup' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
{path:'adminlogin' , component:LoginformComponent},
{path:'logout' ,  component:LoginformComponent},
{path:'getcontact' , component:GetcontactformComponent},
{path:'view',component:ViewComponent},
{path:'postcommercial' , component:PostcommercialComponent},
{path:'postland' , component:PostlandComponent},
{path:'builthouse' , component:PostadComponent},
{path:'posttype' , component:SelectposttypeComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
