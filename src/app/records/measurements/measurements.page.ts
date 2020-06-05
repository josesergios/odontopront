import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.page.html',
  styleUrls: ['./measurements.page.scss'],
})

export class MeasurementsPage implements OnInit {    
    id: any;

    form = {
        pulse: null,
        systolic: null,
        diastolic: null        
    }

    constructor(private navCtrl: NavController,
      private httpClient: HttpClient,
      private route: ActivatedRoute,
      @Inject(LOCAL_STORAGE) private storage: StorageService) {
        this.id = this.route.snapshot.paramMap.get('id');
      }

    async ngOnInit() {

    };
    
    goToBack(){
      this.navCtrl.pop();
    }
    
    submit(){
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, private'
        },
        params: new HttpParams()
      };
  
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + this.storage.get('auth.token')
        })
      };
  
      this.httpClient
        .post(environment.apiurl + '/records/' + this.id + '/measurements', this.form, httpOptions).toPromise()
        .then(() => {
          // @ts-ignore
          window.alert('Informações cadastradas com sucesso.');
          this.navCtrl.navigateBack('/records-details/' + this.id);
        }).catch(error => {
          window.alert('Ocorreu um erro ao efetuar a operação, favor tentar novamentex.');
        });
    }
}
