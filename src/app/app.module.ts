import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule, ComponentRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentRouting,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBrYUOVEKubmsGXXUyBmEaLySt4mJ6dOOc",
      authDomain: "market-da614.firebaseapp.com",
      databaseURL: "https://market-da614.firebaseio.com",
      projectId: "market-da614",
      storageBucket: "market-da614.appspot.com",
      messagingSenderId: "654134948014",
      appId: "1:654134948014:web:6e376980d3d036afeafd3f",
      measurementId: "G-T0FREK672J"
    }),
    AngularFireAuthModule
  ],
  providers: [
    {provide: FirestoreSettingsToken , useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
