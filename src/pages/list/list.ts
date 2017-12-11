import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {BrowserPage} from '../browser/browser'

import { ItemDetailsPage } from '../item-details/item-details';
import { FileChooser } from '@ionic-native/file-chooser';
//import { FileChooser } from '@ionic-native/file-chooser';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { PhotoLibrary } from '@ionic-native/photo-library';
import {AuthService} from '../../providers/auth-service/auth-service';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{fName: string, url: string}>;

  constructor(public navCtrl: NavController,private auth: AuthService,private photoLibrary: PhotoLibrary,private file: File,public navParams: NavParams,private fileChooser: FileChooser) {
    
    this.items = [];
    this.items= this.auth.getLocalList();
    
  }

  
  addDir(){
    this.items = [];
    this.items= this.auth.getLocalList();
    
  }
  
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
      
    });
  }

}

