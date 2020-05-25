import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  //public contato: Array<object> = [];
    contato : any;

  constructor( private navCtrl: NavController, private httpClient: HttpClient, private httpRapams: HttpParams,
    private route: ActivatedRoute,
    @Inject(LOCAL_STORAGE) private storage: StorageService) {
      // this.contato = [
      //   {
      //   "name" : "José da Silva",
      //   "document": "01258862",
      //   "birth_date": "20/05/2020",
      //   "gender": "Masculino",
      //   "skin_color": "Pardo",
      //   "birth_city": "Feira de santana",
      //   "birth_uf": "BA",
      //   "marital_status": "Solteiro",
      //   "mobile":"75 99988-9885",
      //   "occupation": " Tec.suporte",
      //   "address": {
      //     "street": " Carneiro",
      //     "number": "256",
      //     "complement": "predio azul",
      //     "neighborhood": "Queimadinha",
      //     "city": "Feira de santana",
      //     "uf": "BA",
      //     "postcode": "44050098",
      //     "phone": "75 988996953"
      //   }

      //   }
      // ]
     }
  
  async ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + await this.storage.get('auth.token')
      })
    };

    let id = this.route.snapshot.paramMap.get('id');

    this.httpClient.get(environment.apiurl + '/patients/' + id, httpOptions).toPromise().then(res => {
     //console.log('patients', res);
      this.contato = res;
    })
  }

  goToBack(){
    this.navCtrl.navigateForward('/patients-list');
  }

}
