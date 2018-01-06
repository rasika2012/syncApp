import {Injectable} from '@angular/core';
//import {HTTP, Headers} from '@angular/http';
import { Http ,Headers,RequestOptions} from '@angular/http';
import { NavController, NavParams, LoadingController, Loading  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import {ListPage} from '../../pages/list/list';
import { HelloIonicPage } from '../../pages/hello-ionic/hello-ionic';
import { AlertController } from 'ionic-angular';

import {MyApp} from '../../app/app.component';
import { File } from '@ionic-native/file';
import 'rxjs/add/operator/map';
import { Alert } from 'ionic-angular/components/alert/alert';
import {FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { isDefined } from 'ionic-angular/util/util';
import { List } from 'ionic-angular/components/list/list';
import { SERVER_TRANSITION_PROVIDERS } from '@angular/platform-browser/src/browser/server-transition';
import { Item } from 'ionic-angular/components/item/item';
import { summaryFileName } from '@angular/compiler/src/aot/util';



@Injectable()
export class AuthService {

constructor(private fileTrafer1: FileTransfer,private transfer: FileTransfer,public loadingCtrl: LoadingController,private http: HttpClient,public storage: Storage  ,public storage2: Storage  ,private file: File,public alertCtrl: AlertController) {
    console.log('Hello AuthService Provider');
 
    
    
}

cameraData: string;
photoTaken: boolean;
cameraUrl: string;
photoSelected: boolean;
lastImage: string = null;
loading: Loading;
base64Image;
postData(credentials, type) {
  }
  name:any;
 // = 'http://192.168.1.4/MyPhp/newP/inc';
  host ='https://freesynctest.000webhostapp.com/inc'
  hostNet='http://projecte14.atwebpages.com/inc/'
  respond:any;
  key:any;
  itemsLocal: Array<{fName: string, url: string,uploaded:string,uploadVal:boolean,index:number}>;
 public itemsCloud: Array<{fName: string, url: string,uploaded:string,uploadVal:boolean,index:number}>;
  item:{fName: string, url: string,uploaded:string,uploadVal:boolean,index:number};
 
login(username,password){
    this.http.get(this.host+'/log.php?userName='+username+'&password='+password).subscribe(data => {
      console.log(data['username']);
      this.name=data['username'];
      this.storage.set('uname',data['username']).then(data=>{
      this.storage.set('errorMassege', 'Please wait..');
      return true;
      });  
      },
    (err: HttpErrorResponse)=>{
     
      let alert = this.alertCtrl.create({
        title: 'Loging Failed',
        subTitle: 'Check your User name and Password or net connection',
        buttons: ['OK']
      });
      
        alert.present();
        this.storage.set('errorMassege',  'Something went wrong');
        return false;
    });
    return false;
    }

  //http://projecte14.atwebpages.com
singUp(  Fname,Lname,userName,password){
    this.http.get(this.host+'/sing.php?Fname='+Fname+'&Lname='+Lname+'&userName='+userName+'&password='+password).subscribe(data => {
    console.log(data['status']);
    this.storage.set('status',data['status']).then(val=>{
    this.storage.set('errorMassege', data['status']);
    return true;
    });  
    },
    (err: HttpErrorResponse)=>{
    this.storage.set('errorMassege',  'Cannot Create acout now');
    return false;
  });
  return false;
  }

  getLocalList():any{
    this.itemsLocal = [];

    
      
    
      this.file.listDir("file:///storage/emulated/0/DCIM","Camera").then((results) => {
        
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
              
                
                this.storage2.get('uname').then(val =>{
                  this.name=val;
                }); 
                  
                    this.itemsLocal.push({
                      fName: results[i].name,
                      url:results[i].nativeURL,
                      uploaded:'local',
                      uploadVal:false,
                      index :this.itemsLocal.length 
                    });
                  
               

              
              
        }
        //this.storage.set('ss','ff');
        
      }).then(val=>{
        
      });
      
      return this.itemsLocal;
    }


   
    uploadFile(selectedItem:{fName: string, url: string,uploaded:string,uploadVal:boolean,index:number}):any{
      // Destination URL
        var url = this.host+"/uplode.php"+'?userName=' +this.name;

      var path=selectedItem.url;
      var fileName=selectedItem.fName;

   // File for Upload
    var targetPath =path;
        //var Path =this.file.readAsDataURL("file:///storage/emulated/0/DCIM/Camera/",fileName)     
   //
   var imagePath = path.substr(0, path.lastIndexOf('/') + 1);
   var imageName = path.substr(path.lastIndexOf('/') + 1); 
    
    var filename = fileName;
    var uName: string;
    this.storage.get('uname').then((data)=>{

      uName=data;
    });
   
    var options = {
    fileKey: "fileToUpload",
    fileName: filename,
    chunkedMode: true,
    mimeType: "multipart/form-data",
    params : {'name': filename,'fileKey':21213,'userName':uName}
   };
   
   const fileT = new FileTransfer();
   const fileTransfer: FileTransferObject=this.fileTrafer1.create();
  
  fileTransfer.upload(path,url,options).then(data=>{
    
    /* let alert = this.alertCtrl.create({
      title:'Succesfully Uploaded', //data.response,
      subTitle:data.response+'done',
      buttons: ['OK']
    });
   
    alert.present(); */
    this.storage.get('settings.keepOriginal.device').then(val=>{
      if(val==false){
        this.file.removeFile(imagePath, fileName);
      }
    });
   
    selectedItem.uploaded='cloud';
    selectedItem.uploadVal=true;

  },err=>{
    this.storage.set('file:'+filename,'done');
    let alert = this.alertCtrl.create({
      title:"File not uploaded",
      subTitle:"File failed to upload.Error:"+ err.code,
      buttons: ['OK']
    });
    
    alert.present() 

    this.loading.dismiss();
    selectedItem.uploaded='local';
    selectedItem.uploadVal=false;
    selectedItem.url=this.host+'/img/'+this.name+'/';
  });
 }

 
  
      
  
  getCloudList():any{
    this.itemsCloud=[];
    var dataset:any
    this.storage.get('uname').then(val =>{
    this.name=val;
   
      this.http.get(this.host+'/get.php?userName='+this.name).subscribe(data => {
      dataset=data;
      
      for(var i =0;i<dataset.length;i++){
          this.itemsCloud.push(
            {
              fName: dataset[i],
              url:this.host+'/img/'+this.name+'/',
              uploaded:'cloud',
              uploadVal:true,
              index :this.itemsCloud.length 
            }
          )

      }  
     
      },err=>{
        let alert = this.alertCtrl.create({
          title:"Cant connected to server",
          subTitle:'Please check data connection',
          buttons: ['OK']
        });
        alert.present();

        
      });
    }).then(val=>{
   
    });
    return this.itemsCloud;
    }

   

  download(selectedItem:{fName: string, url: string,uploaded:string,uploadVal:boolean,index:number}):any {
    var fileName=selectedItem.fName;
    const fileTransfer: FileTransferObject=this.fileTrafer1.create();
      const url = this.host+'/img/'+this.name+'/'+fileName;
      fileTransfer.download(url, 'file:///storage/emulated/0/DCIM/Camera/'+ fileName).then((entry) => {
        console.log('download complete: ' + entry.toURL());
       /*  let alert = this.alertCtrl.create({
          title:"Done",
          subTitle:'Download complete: ' + entry.toURL(),
          buttons: ['OK']
        });
        //this.navctrl.setRoot(ListPage);
        alert.present() */
        this.storage.get('settings.keepOriginal.cloud').then(val=>{
          if(val==false){
            this.deleteCloud(selectedItem);
          }
        });
        
        selectedItem.uploaded='local';
        selectedItem.uploadVal=false;
        selectedItem.url="file:///storage/emulated/0/DCIM/Camera/";
        return selectedItem;
      }, (err) => {
        
        let alert = this.alertCtrl.create({
          title:"File not Downloaded",
          subTitle:"File failed to Download.Error:"+ err.code,
          buttons: ['OK']
        });
        
        alert.present() 
        return selectedItem;
      });
      
  }

    deleteCloud(selectedItem:{fName: string, url: string,uploaded:string,uploadVal:boolean,index:number}):any{
      this.storage.get('uname').then(val =>{
      this.name=val;
      this.http.get(this.host+'/delete.php?userName='+val +'&imgName='+selectedItem.fName).subscribe(val=>{
        var retItem=selectedItem;
        retItem.uploaded='Deleted';
        retItem.fName='This file was deleted';
        return retItem;
      })
      
    })
    
  }
  deleteCloudAll(){
    
   
    for(var i=0;i<this.itemsCloud.length;i++){
      this.deleteCloud(this.itemsCloud[i]);
    }
  }
  }