import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

@Injectable()
export class LoginPage implements OnInit {
  credentials = {
    email: "user@odontopront.io",
    password: "12345678"
  }

  constructor(
    private httpService: HttpClient,
    private navCtrl: NavController,
    public alertController: AlertController,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  ngOnInit() { }

  login(){
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
          // @ts-ignore
          this.storage.set('auth.user', respose.user);
          // @ts-ignore
          this.storage.set('auth.token', respose.token);

          this.router.navigateByUrl('/patients-list');
        }).catch(error => {
          window.alert('Ocorreu um erro ao realizar o login, favor verificar os dados de acesso e tentar novamente.')
        });
  }

  goTosenhaPage(){
    this.navCtrl.navigateForward('/register');
  }
}
