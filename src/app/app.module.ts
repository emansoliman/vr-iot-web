import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
 import {AngularFirestoreModule,FirestoreSettingsToken} from '@angular/fire/firestore';
import { ProviderAst } from '@angular/compiler';
import {AngularFireModule} from '@angular/fire';
//import { ItemsComponent } from './filtercomponent/items/items.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

import {Routes ,RouterModule}from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AgmCoreModule } from '@agm/core';

//import { ProfileComponent } from './profile/profile.component';
//import { DetailsComponent } from './details/details.component';
//import { ContactComponent } from './contact/contact.component';
//import { HeaderComponent } from './header/header.component';
//import { AboutUSComponent } from './about-us/about-us.component';
//import { FooterComponent } from './footer/footer.component';
//import { CommunicateComponent } from './communicate/communicate.component';
import { LoginComponent } from './login/login.component';
 
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AppRoutingModule } from './shared/routing/app-routing.module';

// Firebase services + enviorment module


import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { HomeComponent } from './home/home.component';
import { HomeeComponent } from './homee/homee.component';
import { HomeeeComponent } from './filtercomponent/homeee/homeee.component';

import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConnectusComponent } from './connectus/connectus.component';
import { ChartCaloriesComponent } from './chart-calories/chart-calories.component';
import { FilterComponent } from './filter/filter.component';

import { FormBuilder,  FormGroup, Validators, AbstractControl} from '@angular/forms';
import { NewUserComponent } from './filtercomponent/new-user/new-user.component';


import { OrdersService } from "./shared/services/orders.service";
import { FeedbackComponent } from './feedback/feedback.component';
import { ShwoUsersComponent } from './shwo-users/shwo-users.component';
import { DetailsComponent } from './details/details.component';
import { Details2Component } from './details2/details2.component';
import { Details3Component } from './details3/details3.component';
import {SlideshowModule} from 'ng-simple-slideshow';




FusionChartsModule.fcRoot(FusionCharts, Charts, TimeSeries);
 
 const appRoutes:Routes =[
  
  {path:'filter',component:FilterComponent},
  {path:'home',component:HomeComponent },
    {path:'chart' ,component:ChartComponent},
    {path:'login' ,component: LoginComponent },
    {path:'profile' ,component: ProfileComponent},
    {path:'about', component:  AboutUsComponent},
    {path:'communicate' ,component: ConnectusComponent},
    {path:'chart-calories' ,component:ChartCaloriesComponent},
    {path:'feedback' ,component:FeedbackComponent},
    {path:'homee',component:HomeeComponent },
    {path:'details',component:DetailsComponent},
    {path:'details2',component:Details3Component},
    {path:'details3',component:Details2Component},
    {path:'shwo-users',component:ShwoUsersComponent},
    {path:'dealychart' ,component: HomeeeComponent},
    {path:'monthlyscore' ,component: NewUserComponent},


    
  
  /*
  {path:'details' ,component: DetailsComponent},
  {path:'conect' ,component: ContactComponent },
  {path:'header' ,component: HeaderComponent },
  {path:'about' ,component: AboutUSComponent },
 
*/

 


]


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    //ItemsComponent,
    //ProfileComponent,
    //DetailsComponent,
    //ContactComponent,
    //HeaderComponent,
    //AboutUSComponent,
    //FooterComponent,
    //CommunicateComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    ProfileComponent,
    AboutUsComponent,
    ConnectusComponent,
    ChartCaloriesComponent,
    FilterComponent,
    NewUserComponent,
    FeedbackComponent,
    ShwoUsersComponent,
    HomeeComponent,
    HomeeeComponent,
    DetailsComponent,
    Details2Component,
    Details3Component ,

  
    
  ],
 
  
  imports: [
    SlideshowModule,
    BrowserModule ,
    FusionChartsModule,
    AngularFirestoreModule,  
    HttpClientModule,
    HttpClientModule,
    FormsModule,  
     AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule ,
    
 

    
 

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBOedhlvPPTgoerKxXsKHI1GPsfBkl-jqg",
      authDomain: "mohema-96e03.firebaseapp.com",
      databaseURL: "https://mohema-96e03.firebaseio.com",
      projectId: "mohema-96e03",
      storageBucket: "mohema-96e03.appspot.com",
      messagingSenderId: "191811625703",
      appId: "1:191811625703:web:e51750d3daf421393eb842",
      measurementId: "G-38NZX63XBH"
  }),
 

    
  

 
     
  ],
  providers: [
    
    {provide: FirestoreSettingsToken,useValue:{}},OrdersService 
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
