import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {routing} from "./app.routing";
import {FirebaseAppConfig, AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {AuthService} from "./services/auth.service";
import {TrackingService} from "./services/tracking.service";
import {UserService} from "./services/user.service";

export const config: FirebaseAppConfig = {
  apiKey: "AIzaSyDEQjvGGflGaKxqaazuc5TYn0d2S72GseA",
  authDomain: "taimrli.firebaseapp.com",
  databaseURL: "https://taimrli.firebaseio.com",
  storageBucket: "firebase-taimrli.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(config, myFirebaseAuthConfig)
  ],
  providers: [UserService, TrackingService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
