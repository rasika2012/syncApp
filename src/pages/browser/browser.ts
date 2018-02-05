import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {File} from '@ionic-native/file';
import {ImagePicker} from '@ionic-native/image-picker';
import {PhotoLibrary} from '@ionic-native/photo-library';

/**
 * Generated class for the BrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',


})
export class BrowserPage {
  path = this.file.externalRootDirectory;
  items = [];


  constructor(public navCtrl: NavController, private photoLibrary: PhotoLibrary, public navParams: NavParams, private file: File, private imagePicker: ImagePicker,) {
    if (navParams.get('path') != null) {
      this.path = navParams.get('path');
    }


  }


  ionViewDidLoad() {
    console.log(this.file.externalRootDirectory);
    console.log(this.path);


    var options = {
      maximumImagesCount: 10,

    };

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {

        this.items.push({
          title: results[i],

          note: results[i],

        });
      }
    }, (err) => {
    });
  }

}
