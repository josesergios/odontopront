import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
      [
        {
          title : "Pacientes",
          url   : "/patients-list",
          icon  : "finger-print-outline"
        },
        {
          title : "Prontuários",
          url   : "/records-list",
          icon  : "reader-outline"
        },
        {
          title : "Usuários",
          url   : "/users-list",
          icon  : "people-outline"
        },
        {
          title : "Perfil",
          url   : "/profile",
          icon  : "person-outline"
        },
        {
          title : "Alterar senha",
          url   : "/password",
          icon  : "lock-closed-outline"
        },
        {
          title : "Sair",
          url   : "/logout",
          icon  : "log-out-outline"
        },
      ]
  }
}
