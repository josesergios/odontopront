import { Component, OnInit, Inject } from '@angular/core';
import {ActionSheetController, NavController} from '@ionic/angular';
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

  patient: any;

  constructor( private navCtrl: NavController, private httpClient: HttpClient, private httpRapams: HttpParams,
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    @Inject(LOCAL_STORAGE) private storage: StorageService) {

  }
  
  async ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + await this.storage.get('auth.token')
      })
    };

    let id = this.route.snapshot.paramMap.get('id');

    this.httpClient.get(environment.apiurl + '/patients/' + id, httpOptions).toPromise().then(response => {
      this.patient = response;
    })
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ações',
      buttons: [{
        text: 'Editar',
        handler: () => {
          console.log('Edit clicked');
        }
      }, {
        text: 'Adicionar prontuário',
        handler: () => {
          this.navCtrl.navigateForward(`/records-create/${this.patient.id}`);
        }
      }]
    });
    await actionSheet.present();
  }

  goToDetailsRecords(id){
    this.navCtrl.navigateForward(`/records-details/${id}`);
  }

  goToBack(){
    this.navCtrl.navigateBack('/patients-list');
  }
}
