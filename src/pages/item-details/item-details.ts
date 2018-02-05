import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import {ImagePicker} from '@ionic-native/image-picker';
import {AuthService} from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',

})
export class ItemDetailsPage {
  selectedItem: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker, private auth: AuthService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  items = [];

  ionViewDidLoad() {

    var options = {
      maximumImagesCount: 10,
      width: 800,
      height: 800,
      quality: 80
    };

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {

        this.items.push({
          title: results[i],
          note: "ss"

        });
      }
    }, (err) => {
    });
  }

  itemTapped(event, item) {


  }
}

