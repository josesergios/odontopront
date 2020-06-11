import {Component, Inject, Injectable, NgModule, OnInit} from '@angular/core';
import { NavController} from "@ionic/angular";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LOCAL_STORAGE, StorageService} from "ngx-webstorage-service";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

@Injectable()
export class CreatePage implements OnInit {
  form = {
    name: null,
    email: null,
    phone: null,
    code: null,
    type: null
  }

  constructor(
    private navCtrl: NavController,
    private httpService: HttpClient,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ){ }

  ngOnInit() {
  }

  goToBack(){
    this.navCtrl.pop();
  }

  submit(){
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
      .post(environment.apiurl + '/users', this.form, httpOptions).toPromise()
      .then(respose => {
        window.alert('Usuário criado com sucesso!');
        window.location.href="/users-list";
      }).catch(error => {
      window.alert('Ocorreu um erro ao efetuar a operação, favor tentar novamente.');
      window.location.href="/users-list";
    });
  }
} 
