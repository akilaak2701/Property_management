import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
import { ListsComponent } from './lists/lists.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
// import { ServiceComponent } from './service/service.component';
// import { ServicesComponent } from './services/services.component';
import { PostadComponent } from './postad/postad.component';
import { TestingComponent } from './testing/testing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { NodetestComponent } from './nodetest/nodetest.component';
// import { HomeComponent } from './home/home.component';
import{ HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { AdminComponent } from './admin/admin.component';
import { RentalapplicationComponent } from './rentalapplication/rentalapplication.component';
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
import { TestComponent } from './test/test.component';
import { RentalComponent } from './rental/rental.component';
import { CommercialComponent } from './commercial/commercial.component';
import { LandComponent } from './land/land.component';
import { Land1Component } from './land1/land1.component';
import { Land2Component } from './land2/land2.component';
import { Land3Component } from './land3/land3.component';
import { Land4Component } from './land4/land4.component';
import { Land5Component } from './land5/land5.component';
import { Land6Component } from './land6/land6.component';
import { Commercial1Component } from './commercial1/commercial1.component';
import { Commercial2Component } from './commercial2/commercial2.component';
import { Commercial3Component } from './commercial3/commercial3.component';
import { Commercial4Component } from './commercial4/commercial4.component';
import { Commercial5Component } from './commercial5/commercial5.component';
import { Commercial6Component } from './commercial6/commercial6.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashpostpropComponent } from './dashpostprop/dashpostprop.component';
import { DashqueriesComponent } from './dashqueries/dashqueries.component';
import { DashsignupComponent } from './dashsignup/dashsignup.component';
import { FormtypeComponent } from './formtype/formtype.component';
import { HttpCallInterceptor } from 'src/interceptortoast';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { BuytypeofpropComponent } from './buytypeofprop/buytypeofprop.component';
import { SelltypeofpropComponent } from './selltypeofprop/selltypeofprop.component';
import { FilterPipe } from './filter.pipe';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// const routes: Routes = [
//   {path: '', component: ListsComponent},
//   {path: 'signup', component: SignupComponent},
//   {path: 'login' , component:LoginComponent},
//   {path :'postprop' , component:PostadComponent},
//   {path : 'contact' , component:ContactComponent},
//   {path : 'about' , component:AboutusComponent},
//   {path : 'services' , component:ServiceComponent}

// ]
// const routes: Routes = [
//   {path:'maintanence',component:MaintanenceReqComponent},
// ]
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponentComponent,
    ListsComponent,
    ContactComponent,
    AboutusComponent,
    // ServicesComponent,
    PostadComponent,
    TestingComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AdminComponent,
    RentalapplicationComponent,
    House1Component,
    House2Component,
    House3Component,
    House4Component,
    House5Component,
    House6Component,
    House7Component,
    House8Component,
    House9Component,
    Services2Component,
    ServiceformComponent,
    TestComponent,
    RentalComponent,
    CommercialComponent,
    LandComponent,
    Land1Component,
    Land2Component,
    Land3Component,
    Land4Component,
    Land5Component,
    Land6Component,
    Commercial1Component,
    Commercial2Component,
    Commercial3Component,
    Commercial4Component,
    Commercial5Component,
    Commercial6Component,
    DashboardComponent,
    DashpostpropComponent,
    DashqueriesComponent,
    DashsignupComponent,
    FormtypeComponent,
    BuytypeofpropComponent,
    SelltypeofpropComponent,
    FilterPipe,
    LoginformComponent,
    RegisterComponent,
    LoginComponent,
    
    // AdminLoginComponent,
    // ChatappComponent,
    // NodetestComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    // ToastrModule.forRoot(),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCallInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
