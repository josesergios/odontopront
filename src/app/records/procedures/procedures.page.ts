import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.page.html',
  styleUrls: ['./procedures.page.scss'],
})
export class ProceduresPage implements OnInit {
  id: any;

  students: [];
  teachers: [];

  form = {
    student_id: null,
    teacher_id: null,
    dent: null,
    name: null
  }

  constructor( private navCtrl: NavController,
      private httpClient: HttpClient,
      private route: ActivatedRoute,
      @Inject(LOCAL_STORAGE) private storage: StorageService) { 
        this.id = this.route.snapshot.paramMap.get('id');
      }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.storage.get('auth.token')
      })
    };

    this.httpClient
      .get(environment.apiurl + '/users', httpOptions).toPromise()
      .then(respose => {
        this.students = respose.filter((item) => {
          return item.type === 'student';
        })

        console.log(this.students)

        this.teachers = respose.filter((item) => {
          return item.type === 'teacher';
        })

        console.log(this.teachers)
      });
  }

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
      .post(environment.apiurl + '/records/' + this.id + '/procedures', this.form, httpOptions).toPromise()
      .then(() => {
        // @ts-ignore
        window.alert('Informações cadastradas com sucesso.');
        this.navCtrl.navigateBack('/records-details/' + this.id);
      }).catch(error => {
        window.alert('Ocorreu um erro ao efetuar a operação, favor tentar novamente.');
      });
  }
}
