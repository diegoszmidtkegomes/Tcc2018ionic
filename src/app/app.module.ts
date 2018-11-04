import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { CarrosServiceProvider } from '../providers/carros-service/carros-service';
import { EscolhaPage } from '../pages/escolha/escolha';
import { AgendamentosServiceProvider } from '../providers/agendamentos-service/agendamentos-service';
import {IonicStorageModule} from '@ionic/storage';
import 'rxjs/add/operator/finally';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento-dao';
import { CarroDaoProvider } from '../providers/carro-dao/carro-dao';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocationTracker } from '../providers/location-tracker/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';


// PRIMEIRO PROVIDER, PARA agendamentos
function provideStorage1() {

  return new Storage({
    name: 'tcc2018',
    storeName: 'agendamentos'
  });

}

// SEGUNDO PROVIDER, para carros
function provideStorage2() {

  return new Storage( {
    name: 'tcc2018',
    storeName: 'carros'
  });

}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarrosServiceProvider,
    AgendamentosServiceProvider,
    Geolocation,
    LocalNotifications,
    BackgroundMode,
    Camera,
    AgendamentoDaoProvider,
    CarroDaoProvider,
    DatePipe,
    { provide: ErrorHandler, useClass: IonicErrorHandler },     
    { provide: 'agendamentoStorage', useFactory: provideStorage1},
    { provide: 'carroStorage', useFactory: provideStorage2},
    LocationTracker,
    BackgroundGeolocation
  ]
})
export class AppModule {}
