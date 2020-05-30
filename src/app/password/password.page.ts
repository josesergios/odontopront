import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Component({
  selector: 'password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})

@Injectable()
export class PasswordPage implements OnInit {
  credentials = {
    current_password: "",
    new_password: ""
  }

  constructor(
    private httpService: HttpClient,
    private navCtrl: NavController,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  ngOnInit() { }

  updatePassword(){
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, private'
      },
      params: new HttpParams()
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.storage.get('auth.token')
      })
    };

    this.httpService
      .put(environment.apiurl + '/users/password', this.credentials, httpOptions).toPromise()
      .then(respose => {
        window.alert('Senha alterada com sucesso.')
      }).catch(error => {
        window.alert('Ocorreu um erro ao efetuar a operação, favor tentar novamente.')
    });
  }
}
