import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PostadComponent } from './postad/postad.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TestingComponent } from './testing/testing.component';
import { RentalapplicationComponent } from './rentalapplication/rentalapplication.component';
// import { AdminComponent } from './admin/admin.component';
import { House1Component } from './house1/house1.component';
import { House2Component } from './house2/house2.component';
import { House3Component } from './house3/house3.component';
import { House4Component } from './house4/house4.component';
import { House5Component } from './house5/house5.component';
import { House6Component } from './house6/house6.component';
import { House7Component } from './house7/house7.component';
import { House8Component } from './house8/house8.component';
import { House9Component } from './house9/house9.component';
import { Services2Component } from './services2/services2.component';
import { ServiceformComponent } from './serviceform/serviceform.component';
// import { SelectpropComponent } from './selectprop/selectprop.component';
import { LandComponent } from './land/land.component';
import { CommercialComponent } from './commercial/commercial.component';
import { RentalComponent } from './rental/rental.component';
import { Commercial1Component } from './commercial1/commercial1.component';
import { Commercial2Component } from './commercial2/commercial2.component';
import { Commercial3Component } from './commercial3/commercial3.component';
import { Commercial4Component } from './commercial4/commercial4.component';
import { Commercial5Component } from './commercial5/commercial5.component';
import { Commercial6Component } from './commercial6/commercial6.component';
import { DashpostpropComponent } from './dashpostprop/dashpostprop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashqueriesComponent } from './dashqueries/dashqueries.component';
import { BuytypeofpropComponent } from './buytypeofprop/buytypeofprop.component';
import { AdminComponent } from './admin/admin.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  {path: '',component:ListsComponent},
  {path:'lists',component:ListsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'postprop' ,component:PostadComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'service' ,component:ServicesComponent}, 
  // {path:'maintanence',component:TestingComponent},
  {path:'akila',component:LoginformComponent},
  // {path:'upload' , component:AgreementUploadComponent},
  // {path:'application' , component:RentalapplicationComponent},
  {path:'house1' , component:House1Component},
  {path:'house2' , component:House2Component},
  {path:'house3' , component:House3Component},
  {path:'house4' , component:House4Component},
  {path:'house5' , component:House5Component},
  {path:'house6' , component:House6Component},
  {path:'house7' , component:House7Component},
  {path:'house8' , component:House8Component},
  {path:'house9' , component:House9Component},
  {path:'apply' , component:RentalapplicationComponent},
  {path:'service2' , component:Services2Component},
  {path:'serviceform' , component:ServiceformComponent},
  {path:'selectprop' , component:BuytypeofpropComponent},
  {path:'land',component:LandComponent},
  {path:'commercial', component:CommercialComponent},
  {path:'land1' , component:RentalComponent},
  {path:'land2' , component:RentalComponent},
  {path:'land3' , component:RentalComponent},
  {path:'land4' , component:RentalComponent},
  {path:'land5' , component:RentalComponent},
  {path:'land6' , component:RentalComponent},
  {path:'comm1' , component:Commercial1Component},
  {path:'comm2' , component:Commercial2Component},
  {path:'comm3' , component:Commercial3Component},
  {path:'comm4' , component:Commercial4Component},
  {path:'comm5' , component:Commercial5Component},
  {path:'comm6' , component:Commercial6Component},
  {path:'rental' , component:ServicesComponent},
  {path:'land' , component:LandComponent},
  {path:'contact2' ,  component:ContactComponent},
  {path:'dashpost' , component:DashpostpropComponent},
  {path:'buy' , component:ServicesComponent},
  {path:'sell' , component:PostadComponent},
  {path:'commercial' , component:CommercialComponent},
  // {path:'admin' , component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'queries' , component:DashqueriesComponent},
  {path:'posted' , component:DashpostpropComponent},
  {path:'buytypeofprop' , component:BuytypeofpropComponent},
  {path:'signup' , component:RegisterComponent},
  {path:'login' , component:LoginComponent}
  // {path:'rental' , component:RentalComponent},
  // {path:''}
  // {path:'adminlogin' , component:Adm}
  // {path:''}
    // {
    //   path: 'maintanance',
    //   component: MaintanenceReqComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
