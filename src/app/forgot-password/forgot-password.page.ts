import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';


@Component({
  selector: 'app-register',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})

@Injectable()
export class ForgotPasswordPage implements OnInit {
  credentials = {
    email: "user@odontopront.io",
    code: "12345678"
  }

  constructor(private httpService: HttpClient,
              private navCtrl: NavController,
              private router: Router,
              @Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  ngOnInit() {
  }

  forgotPassword(){
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, private'
      },
      params: new HttpParams()
    };

    this.httpService
      .post(environment.baseurl + '/forgot-password', this.credentials, requestOptions).toPromise()
      .then(respose => {
        window.alert('Senha enviada com sucesso.')
      }).catch(error => {
      window.alert('Ocorreu um erro ao processar a requisição, favor verificar os dados informados e tentar novamente.')
    });
  }

  goToLogin(){
    this.navCtrl.navigateForward('/login');
  }

}
