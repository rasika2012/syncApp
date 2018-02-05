import {Component} from '@angular/core';
import {ImagePicker} from '@ionic-native/image-picker';


import {NavController, NavParams} from 'ionic-angular';
import {BrowserPage} from '../browser/browser'
import {ItemDetailsPage} from '../item-details/item-details'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private imagePicker: ImagePicker, public navCtrl: NavController) {

  }

  addFiles() {
    this.navCtrl.push(BrowserPage, {});

  }

  getFiles() {
    this.navCtrl.push(ItemDetailsPage, {});
  }
}
