import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

@Injectable()
export class ListPage implements OnInit {
  list = []

  constructor(
    private httpClient: HttpClient,
    private storage: Storage,
  ) {}

  ngOnInit() {
    var token: any;
    this.storage.get('auth.token').then((data) => {
      token = data
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    this.httpClient
      .get(environment.apiurl + '/patients', httpOptions).toPromise()
      .then(respose => {
        this.list = respose
      });
  }
}
