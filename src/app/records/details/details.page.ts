import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  prontuario : any;
  
  constructor( private navCtrl: NavController, private httpClient: HttpClient,
    private route: ActivatedRoute,
    @Inject(LOCAL_STORAGE) private storage: StorageService) { }

    async ngOnInit() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + await this.storage.get('auth.token')
        })
      };
  
      let id = this.route.snapshot.paramMap.get('id');
  
      this.httpClient.get(environment.apiurl + '/records/' + id, httpOptions).toPromise().then(res => {
       console.log('patients', res);
        this.prontuario = res;
      })
    }

  goToBack(){
    this.navCtrl.navigateForward('/records-list');
  }
}
