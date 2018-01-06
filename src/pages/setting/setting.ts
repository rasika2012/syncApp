import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


import { Storage } from '@ionic/storage';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { LoginPage } from '../login/login';
import {AuthService} from '../../providers/auth-service/auth-service';
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  userName:any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  deviceSet:boolean;
  cloudSet:boolean;
  constructor(public Auth:AuthService, public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.storage.get('settings.keepOriginal.cloud').then(val=>{
      this.cloudSet=val;
    });
    this.storage.get('settings.keepOriginal.device').then(val=>{
      this.deviceSet=val;
    });


    this.storage.get('uname').then(uname=>{
      this.userName =uname;
    });
    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  setup(){
    this.storage.set('settings.keepOriginal.cloud',this.cloudSet);
    this.storage.set('settings.keepOriginal.device',this.deviceSet);
  }
  logout(){
    this.storage.set('uname', null).then((val)=>{
      this.navCtrl.setRoot(LoginPage);
      this.storage.set('pw', null);
    })
  }
 deleteAll(){
   this.Auth.deleteCloudAll();
 }
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
