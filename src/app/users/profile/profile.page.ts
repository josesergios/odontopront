import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user : any;
  
  constructor(private navCtrl: NavController, private httpClient: HttpClient,
    private route: ActivatedRoute,
    @Inject(LOCAL_STORAGE) private storage: StorageService) { }

   ngOnInit() {
    
  }

  async editProfile(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + await this.storage.get('auth.token')
      })
    };

    let id = this.route.snapshot.paramMap.get('id');

    this.httpClient.put(environment.apiurl + '/users/profile' , httpOptions).toPromise().then(res => {
     //console.log('patients', res);
      this.user = res;
    })
  }

  editPassword(){

  }

}
