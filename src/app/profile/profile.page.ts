import {Component, Inject, Injectable, NgModule, OnInit} from '@angular/core';
import { NavController} from "@ionic/angular";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LOCAL_STORAGE, StorageService} from "ngx-webstorage-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

@Injectable()
export class ProfilePage implements OnInit {
  user : any = {
    name: "",
    email: "",
    code: "",
    phone: "",
    type: ""
  };
  
  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    private httpService: HttpClient,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ){ }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.storage.get('auth.token')
      })
    };

    this.httpClient.get(environment.apiurl + '/users/profile' , httpOptions).toPromise().then(res => {
      this.user = res;
    })
  }

  async updateProfile(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.storage.get('auth.token')
      })
    };

    this.httpService
      .put(environment.apiurl + '/users/profile', this.user, httpOptions).toPromise()
      .then(respose => {
        window.alert('Perfil atualizado com sucesso.')
      }).catch(error => {
      window.alert('Ocorreu um erro ao efetuar a operação, favor tentar novamente.')
    });
  }
}
