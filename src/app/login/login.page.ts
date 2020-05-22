import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

  export class LoginPage implements OnInit {
    public itens:any;
    constructor(private httpService: HttpClient) {
    }
  
    logindata:any ={};
  
    ngOnInit() {
    }

    login(){
     let url="http://localhost:8000";
     let data= {email:"user@odontopront.io", senha:"12345678"};
     const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, private'
      },
      params: new HttpParams()
    };
    
     this.httpService.post( url+'/login', data, requestOptions).toPromise().then(res => {
       console.log("RESPOSTA", res);
     });
    }
}
