import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PostadComponent } from './postad/postad.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{ HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { AdminComponent } from './admin/admin.component';
import { House1Component } from './house1/house1.component';
import { CommercialComponent } from './commercial/commercial.component';
import { LandComponent } from './land/land.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashpostpropComponent } from './dashpostprop/dashpostprop.component';
import { DashqueriesComponent } from './dashqueries/dashqueries.component';
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
import { GetcontactformComponent } from './getcontactform/getcontactform.component';
import { ViewComponent } from './view/view.component';
import { PostcommercialComponent } from './postcommercial/postcommercial.component';
import { PostlandComponent } from './postland/postland.component';
import { SelectposttypeComponent } from './selectposttype/selectposttype.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ContactComponent,
    AboutusComponent,
    PostadComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AdminComponent,
    House1Component,
    CommercialComponent,
    LandComponent,
    DashboardComponent,
    DashpostpropComponent,
    DashqueriesComponent,
    BuytypeofpropComponent,
    SelltypeofpropComponent,
    FilterPipe,
    LoginformComponent,
    RegisterComponent,
    LoginComponent,
    GetcontactformComponent,
    ViewComponent,
    PostcommercialComponent,
    PostlandComponent,
    SelectposttypeComponent,
    
  
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCallInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
