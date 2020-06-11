import { Component, OnInit, Inject } from '@angular/core';
import {ActionSheetController, NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from '../../../models/User';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  // user : any = new User();
  user : any;
  id: any;

  // form = {
  //   name: null,
  //   code: null,
  //   phone: null,
  //   email: null
  // }

  constructor( private navCtrl: NavController, private httpClient: HttpClient, 
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    @Inject(LOCAL_STORAGE) private storage: StorageService) { 
      
      this.id = this.route.snapshot.paramMap.get('id');

    }

    async ngOnInit() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + await this.storage.get('auth.token')
        })
      };
      
      this.httpClient.get(environment.apiurl + '/users/' + this.id, httpOptions).toPromise().then(response => {
        this.user = response;
      })
    }
  
  goToBack(){
    this.navCtrl.navigateBack('/users-list');
  }

  async presentActionSheet() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + await this.storage.get('auth.token')
      })
    };
    const actionSheet = await this.actionSheetController.create({
      header: 'Ações',
      buttons: [{
        text: 'Excluir',
        handler: () => {
          console.log('Edit clicked');
          this.httpClient.delete(environment.apiurl +'/users/' + this.id +'/delete', httpOptions).toPromise().then(Response => {
            window.alert("Usuário deletado com sucesso!!");
            window.location.href="/users-list";
          });
        }
      }]
    });
    await actionSheet.present();
  }
}
