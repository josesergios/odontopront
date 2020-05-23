import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  credentials = {
    email: "user@odontopront.io",
    password: "12345678"
  }

  constructor(
    private httpService: HttpClient,
    private navCtrl: NavController,
    public alertController: AlertController,
    private storage: Storage,
    private router: Router) {
  }

  ngOnInit() { }

  login(){
    let vm = this;

    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, private'
      },
      params: new HttpParams()
    };

    this.httpService
        .post(environment.baseurl + '/login', this.credentials, requestOptions).toPromise()
        .then(respose => {
          vm.storage.set('auth.user', respose.user);
          vm.storage.set('auth.token', respose.token);

          vm.router.navigateByUrl('/patients-list');
        }).catch(error => {
          const alert = vm.alertController.create({
            header: 'Erro de autenticação',
            message: 'Ocorreu um erro ao realizar o login, favor verificar os dados de acesso e tentar novamente.',
            buttons: ['OK']
          });
        });
  }

  goTosenhaPage(){
    this.navCtrl.navigateForward('/register');
  }
}
