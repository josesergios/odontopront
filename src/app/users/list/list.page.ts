import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { NavController } from '@ionic/angular';
import { Router } from "@angular/router";
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

@Injectable()
export class ListPage implements OnInit {
  list: Object = []

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.storage.get('auth.token')
      })
    };

    this.httpClient
      .get(environment.apiurl + '/users', httpOptions).toPromise()
      .then(respose => {
        this.list = respose
      });
  }

  goToCreate(){
    this.navCtrl.navigateForward('/users-create');
  }

  goToDetailsUsers(id){
    this.navCtrl.navigateForward(`/users-details/${id}`);
  }
}
