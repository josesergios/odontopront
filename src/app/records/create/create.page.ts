import {Component, Inject, Injectable, NgModule, OnInit} from '@angular/core';
import { NavController} from "@ionic/angular";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LOCAL_STORAGE, StorageService} from "ngx-webstorage-service";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

@Injectable()
export class CreatePage implements OnInit {
  toothStatus = [
    {
      value: "c",
      label: "C"
    },
    {
      value: "r",
      label: "R"
    },
    {
      value: "rc",
      label: "RC"
    },
    {
      value: "exo",
      label: "EXO"
    },
    {
      value: "exoc",
      label: "EXOC"
    },
    {
      value: "endo",
      label: "ENDO"
    },
    {
      value: "pf",
      label: "PF"
    },
    {
      value: "npf",
      label: "NPF"
    },
    {
      value: "pa",
      label: "-"
    }
  ]

  patient = {
    name: "John Doe"
  }

  questions: Object = {
    medical: [],
    dental: []
  }

  form = {
    patient_id: 1,
    main_complaint: "",
    disease_history: "",
    using_medicine: "",
    other_information: "",
    family_history: "",
    social_psychological_history: null,
    general_evaluation: "",
    head_neck_evaluation: "",
    lymph_nodes: "",
    lips: "",
    tongue: "",
    cheek_mucous: "",
    gum: "",
    oral_floor: "",
    hard_palate: "",
    soft_palate: "",
    oropharynx: "",
    observation: "",
    complementary_exams: "",
    diagnostic: {
      clinical_suspicion: "",
      histopathological_diagnosis: "",
      prognosis: ""  
    },
    examination: {
      soft_parts: "",
      injury_location: "",
      size: "",
      color: "",
      shape: "",
      insertion: "",
      consistency: "",
      mobility: "",
      secundary_signals: ""  
    },
    measurement: {
      pulse: null,
      systolic: null,
      diastolic: null  
    },
    prosthesis: {
      fixed: null,
      removable_top: null,
      removable_bottom: null,
      full_top: null,
      full_bottom: null
    },
    procedures: [
      {
        student_id: null,
        teacher_id: null,
        dent: null,
        name: null
      }
    ],
    referral: {
      dentistry: null,
      surgery: null,
      periodontics: null,
      radiography: null,
      pediatric_dentistry: null,
      endodontics: null,
      orthodontics: null  
    },
    teeth:{
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
      16: null,
      17: null,
      18: null,
      21: null,
      22: null,
      23: null,
      24: null,
      25: null,
      26: null,
      27: null,
      28: null,
      31: null,
      32: null,
      33: null,
      34: null,
      35: null,
      36: null,
      37: null,
      38: null,
      41: null,
      42: null,
      43: null,
      44: null,
      45: null,
      46: null,
      47: null,
      48: null,
    },
    answers: []
  }

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private httpClient: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ){ }

  ngOnInit() {
    let vm = this
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.storage.get('auth.token')
      })
    };

    this.httpClient
      .get(environment.apiurl + '/questions', httpOptions).toPromise()
      .then(response => {
        this.questions = response

        // @ts-ignore
        response.medical.map(function (question) {
          vm.form.answers[question.id] = {
            value: null,
            observations: null
          }
        })

        // @ts-ignore
        response.dental.map(function (question) {
          vm.form.answers[question.id] = {
            value: null,
            observations: null
          }
        })
      });
  }

  goToBack(){
    this.navCtrl.navigateBack('/records-list');
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
      .post(environment.apiurl + '/records', this.form, httpOptions).toPromise()
      .then(respose => {
        // @ts-ignore
        this.router.navigateByUrl('/records/' + respose.id);
      }).catch(error => {
      window.alert('Ocorreu um erro ao efetuar a operação, favor tentar novamente.')
    });
  }
}
