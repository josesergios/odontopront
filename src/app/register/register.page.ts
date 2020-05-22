import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  goTologinPage(){
    this.navCtrl.navigateForward('/login');
  }

}
