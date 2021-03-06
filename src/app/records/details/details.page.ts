import { Component, OnInit, Inject } from '@angular/core';
import {ActionSheetController, NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Record } from '../../../models/Record';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  record : any = new Record();
  id: any;
  scope: any = 'details';

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.storage.get('auth.token')
      })
    };

    this.httpClient.get(environment.apiurl + '/records/' + this.route.snapshot.paramMap.get('id'), httpOptions).toPromise().then(response => {
      this.record = new Record(response);
    })
  }

  async ngOnInit() {

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
        text: 'Adicionar aferição de tensão arterial',
        handler: () => {
          this.navCtrl.navigateForward('/measurements/' + this.id);
        }
      }, {
        text: 'Adicionar procedimento',
        handler: () => {
          this.navCtrl.navigateForward('/procedures/' + this.id);
        }
      }, {
        text: 'Enviar arquivo',
        handler: () => {
          this.navCtrl.navigateForward('/files/' + this.id);
        }
      }]
    });
    await actionSheet.present();
  }

  scopeChanged(event){}

  goToBack(){
    this.navCtrl.navigateBack('/records-list');
  }
}
