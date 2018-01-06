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
import { Storage } from '@ionic/storage';
import { Navbar } from 'ionic-angular/components/toolbar/navbar';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  itemsLocal: Array<{fName: string, url: string,uploaded:string,uploadVal:boolean,index:number}>;
  itemsCloud: Array<{fName: string, url: string,uploaded:string,uploadVal:boolean,index:number}>;
  public  msgBar:string;
  constructor(public navCtrl: NavController,private storage: Storage,private auth: AuthService,private photoLibrary: PhotoLibrary,private file: File,public navParams: NavParams,private fileChooser: FileChooser) {
    this.msgBar='Welcome to Pera sync';
    this.itemsLocal = [];
    
    this.itemsLocal= this.auth.getLocalList();
    this.itemsCloud = [];
    this.itemsCloud=this.auth.getCloudList();
  
    /* this.itemsCloud = [];
    this.itemsCloud.push({
      fName:'Test Entri',
      url:'Not Valid',
      uploaded:'not set',
      uploadVal:true,
      index:this.itemsCloud.length
    });  */
  }

  

  
  itemTapped(event, item) {
    var tmpItem=item;
    
    if(item.uploadVal==false){
  
      item.uploaded='waite';
      this.itemsLocal[item.index]=item;
      
      item= this.auth.uploadFile(item);
      this.itemsLocal[item.index]=item;
    
      //window.location.reload();
      //this.navCtrl.setRoot(ListPage);
      
      
      this.storage.get('settings.keepOriginal.device').then(val=>{
      if(val==false){
        this.itemsLocal[item.index].fName='Deleted';
      }
    
      
    });  

    }else{
     item.uploaded='waite';
     this.itemsCloud[item.index]=item;
     item=this.auth.download(item);
     this.itemsCloud[item.index]=item;
     
     
      this.storage.get('settings.keepOriginal.device').then(val=>{
      if(val==false){
        this.itemsCloud[item.index].fName='Deleted'
        
      }
      
    });  
     // this.navCtrl.setRoot(ListPage);
    }
    
  }

  upload(){
    for(var i =0;i<this.itemsLocal.length;i++){
    var item=this.itemsLocal[i];
    var tmpItem=item;
    
    var aut:AuthService;
    if(item.uploadVal==false){
     item.uploaded='waite';
     this.itemsLocal[item.index]=item;
     
     item= aut.uploadFile(item);
     this.itemsLocal[item.index]=item;
      //window.location.reload();
      //this.navCtrl.setRoot(ListPage);
    

    }
  }
  }

  download(){
    for(var i =0;i<this.itemsCloud.length;i++){
    var item=this.itemsCloud[i];
    var tmpItem=item;
    var aut:AuthService;
    
    if(item.uploadVal==true){
    item.uploaded='waite';
     this.itemsCloud[item.index]=item;
     item=aut.download(item);
     this.itemsCloud[item.index]=item; 

    }
  }
}
}

