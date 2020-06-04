import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.page.html',
  styleUrls: ['./procedure.page.scss'],
})
export class ProcedurePage implements OnInit {

  form = {

    procedures: [
      {
        student_id: null,
        teacher_id: null,
        dent: null,
        procedure: null,
        name: null
      }
    ]
  }

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack(){
      
    this.navCtrl.pop();
    
  }

}
