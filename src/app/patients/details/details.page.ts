import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public patients: any;

  constructor( private navCtrl: NavController, private httpClient: HttpClient, private httpRapams: HttpParams,
    private route: ActivatedRoute,
    @Inject(LOCAL_STORAGE) private storage: StorageService) { }
  
  async ngOnInit() {
    // Esse método aqui é um método padrão pra toda página.
    // Quando a página é renderizada, o que tem dentro desse método é executado, então, é aqui que vc vai 
    // fazer a chamda da api ... tu não tá consumindo nada da api, por isso não tá mostrando nada.
    // E outra, eu adicionei estático lá em cima , por isso quando clico em qualquer um dos paciente, aparece os mesmo dados
    // deu pra entender ?

    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + await this.storage.get('auth.token') // REveer isso amanhã, beleza ? 
      },
      params: new HttpParams()
    };

    let id = this.route.snapshot.paramMap.get('id');

    this.httpClient.get(environment.baseurl + '/patients/' + id, requestOptions).toPromise().then(res => {
      this.patients = res;
    })
  }

  goToBack(){
    this.navCtrl.navigateForward('/patients-list');
  }

}
