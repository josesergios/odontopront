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
  states = [
    {value:"AC",name:"Acre"},{value:"AL",name:"Alagoas"},{value:"AM",name:"Amazonas"},{value:"AP",name:"Amapá"},{value:"BA",name:"Bahia"},{value:"CE",name:"Ceará"},{value:"DF",name:"Distrito Federal"},{value:"ES",name:"Espírito Santo"},{value:"GO",name:"Goiás"},{value:"MA",name:"Maranhão"},{value:"MG",name:"Minas Gerais"},{value:"MS",name:"Mato Grossodo Sul"},{value:"MT",name:"Mato Grosso"},{value:"PA",name:"Pará"},{value:"PB",name:"Paraíba"},{value:"PE",name:"Pernambuco"},{value:"PI",name:"Piauí"},{value:"PR",name:"Paraná"},{value:"RJ",name:"Rio de Janeiro"},{value:"RN",name:"Rio Grande do Norte"},{value:"RO",name:"Rondônia"},{value:"RR",name:"Roraima"},{value:"RS",name:"Rio Grande do Sul"},{value:"SC",name:"Santa Catarina"},{value:"SE",name:"Sergipe"},{value:"SP",name:"São Paulo"},{value:"TO",name:"Tocantins"}
  ];

  form = {
    name: "",
    document: "",
    birth_date: "",
    gender: null,
    skin_color: null,
    birth_city: "",
    birth_uf: null,
    marital_status: null,
    mobile:"",
    occupation: "",
    address: {
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      uf: null,
      postcode: "",
      phone: ""
    },
    commercial_address: {
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      uf: null,
      postcode: "",
      phone: ""
    }
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
    this.navCtrl.navigateBack('/patients-list');
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
      .post(environment.apiurl + '/patients', this.form, httpOptions).toPromise()
      .then(respose => {
        this.router.navigateByUrl('/patients/' + respose.id);
      }).catch(error => {
      window.alert('Ocorreu um erro ao efetuar a operação, favor tentar novamente.')
    });
  }
}
