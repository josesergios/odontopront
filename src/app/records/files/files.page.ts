import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {
  id: any;

  form = {
    file: null,
    name: null
  }

  constructor( private navCtrl: NavController,
      private httpClient: HttpClient,
      private route: ActivatedRoute,
      @Inject(LOCAL_STORAGE) private storage: StorageService) { 
        this.id = this.route.snapshot.paramMap.get('id');
      }

  ngOnInit() {
  }

  goToBack(){
    this.navCtrl.pop();
  }

  onFileSelected(event){
    this.form.file = event.target.files[0];
  }

  submit(){
    const formData = new FormData();

    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type':  'multipart/form-data',
        'Authorization': 'Bearer ' + this.storage.get('auth.token')
      })
    };

    if(this.form.file === null){
      window.alert('Por favor selecione um arquivo.');
    }else {
      formData.append('file', this.form.file, this.form.file.name);
      formData.append('name', this.form.name);

      this.httpClient
        .post(environment.apiurl + '/records/' + this.id + '/files', formData, httpOptions).toPromise()
        .then(() => {
          // @ts-ignore
          window.alert('Arquivo enviado com sucesso.');
          this.navCtrl.navigateBack('/records-details/' + this.id);
        }).catch(error => {
        window.alert('Ocorreu um erro ao efetuar a operação, favor tentar novamente.');
      });
    }
  }
}
