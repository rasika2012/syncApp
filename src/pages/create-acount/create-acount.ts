import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {LoginPage} from '../login/login'
import {AuthService} from '../../providers/auth-service/auth-service';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the CreateAcountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-acount',
  templateUrl: 'create-acount.html',
})
export class CreateAcountPage {


  errmsg = 'no err';
  responseData: any;
  userData = {"username": "", "password": "", "fname": "", "lname": ""};

  constructor(public navCtrl: NavController, private authService: AuthService, private storage: Storage) {
  }

  signup() {
    this.storage.get('errorMassege').then(msg => {
      this.errmsg = msg;
    });

    this.authService.singUp(this.userData.fname, this.userData.lname, this.userData.username, this.userData.password);
    this.storage.get('status').then(msg => {
      if (msg == 'ok') {
        this.navCtrl.setRoot(LoginPage);
      }
    });

  }

  login() {
    this.navCtrl.setRoot(LoginPage);
    console.log("restart");
  }

}
