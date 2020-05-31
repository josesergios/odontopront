import {ErrorHandler, Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://e118cf3c588242adac58fd866820a385@o376203.ingest.sentry.io/5259100"
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), HttpClientModule, StorageServiceModule, NgxMaskIonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
