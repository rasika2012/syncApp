import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FileChooser} from '@ionic-native/file-chooser';
import {File} from '@ionic-native/file';
import {PhotoLibrary} from '@ionic-native/photo-library';
import {AuthService} from '../../providers/auth-service/auth-service';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  itemsLocal: Array<{ fName: string, url: string, uploaded: string, uploadVal: boolean, index: number }>;
  itemsCloud: Array<{ fName: string, url: string, uploaded: string, uploadVal: boolean, index: number }>;
  public msgBar: string;

  constructor(private storage: Storage, private auth: AuthService, private file: File) {
    this.msgBar = 'Welcome to Pera sync';
    this.itemsLocal = [];
    this.itemsLocal = this.auth.getLocalList();
    this.itemsCloud = [];
    this.itemsCloud = this.auth.getCloudList();
  }


  itemTapped(event, item) {
    var tmpItem = item;

    if (item.uploadVal == false) {
      item.uploaded = 'wait';
      this.itemsLocal[item.index] = item;
      item = this.auth.uploadFile(item);
      this.itemsLocal[item.index] = item;
      //window.location.reload();
      //this.navCtrl.setRoot(ListPage);
      this.storage.get('settings.keepOriginal.device').then(val => {
        if (val == false) {
          this.itemsLocal[item.index].fName = 'Deleted';
        }

      });

    } else {
      item.uploaded = 'wait';
      this.itemsCloud[item.index] = item;
      item = this.auth.download(item);
      this.itemsCloud[item.index] = item;


      this.storage.get('settings.keepOriginal.device').then(val => {
        if (val == false) {
          this.itemsCloud[item.index].fName = 'Deleted'

        }

      });
      // this.navCtrl.setRoot(ListPage);
    }

  }

  upload() {
    this.itemsLocal.forEach(item => {
      if (item.uploadVal == false) {
        item.uploaded = 'waite';
        this.itemsLocal[item.index] = item;
        item = this.auth.uploadFile(item);
        this.itemsLocal[item.index] = item;

      }
    });
  }

  download() {

    this.itemsCloud.forEach(item => {
      if (item.uploadVal == true) {
        item.uploaded = 'wait';
        this.itemsCloud[item.index] = item;
        item = this.auth.download(item);
        this.itemsCloud[item.index] = item;
      }
    });

  }
}

