import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";
import {LOCAL_STORAGE, StorageService} from "ngx-webstorage-service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})

@Injectable()
export class LogoutPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  ngOnInit() {
    this.storage.set('auth.user', '');
    this.storage.set('auth.token', '');

    this.router.navigateByUrl('/login');
  }
}
