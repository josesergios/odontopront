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
  
  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) { }

  async ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + await this.storage.get('auth.token')
      })
    };

    let id = this.route.snapshot.paramMap.get('id');

    this.httpClient.get(environment.apiurl + '/records/' + id, httpOptions).toPromise().then(response => {
      this.record = new Record(response);
      console.log(this.record)
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
          console.log('Share clicked');
        }
      }, {
        text: 'Adicionar procedimento',
        handler: () => {
          console.log('Play clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  goToBack(){
    this.navCtrl.navigateBack('/records-list');
  }
}
