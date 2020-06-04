import { Component, OnInit, Inject } from '@angular/core';
import {ActionSheetController, NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  record : any;
  id: any;
  
  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + await this.storage.get('auth.token')
      })
    };

    this.httpClient.get(environment.apiurl + '/records/' + this.id, httpOptions).toPromise().then(response => {
      this.record = response;
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
        text: 'Adicionar aferição de tensão arterial',
        handler: () => {
          //console.log('Share clicked');
          this.navCtrl.navigateForward('/measurements/' + this.id);
        }
      }, {
        text: 'Adicionar procedimento',
        handler: () => {
          //console.log('Play clicked');
          this.navCtrl.navigateForward('/procedure/' + this.id);
        }
      }]
    });
    await actionSheet.present();
  }

  goToBack(){
    this.navCtrl.navigateBack('/records-list');
  }
}
