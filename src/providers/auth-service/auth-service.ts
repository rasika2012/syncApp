import {Injectable} from '@angular/core';
//import {HTTP, Headers} from '@angular/http';
import { Http ,Headers,RequestOptions} from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { HelloIonicPage } from '../../pages/hello-ionic/hello-ionic';

import {MyApp} from '../../app/app.component';
import { File } from '@ionic-native/file';
import 'rxjs/add/operator/map';




@Injectable()
export class AuthService {

constructor(private http: HttpClient,private storage: Storage  ,private file: File) {
    console.log('Hello AuthService Provider');
    this.storage.get('IP').then(res=>{
      this.host=res;
    })
}

postData(credentials, type) {
  }
  host = 'http://192.168.1.4/myphp/newP/inc/';
  hostNet='http://projecte14.atwebpages.com/inc/'
  respond:any;
  key:any;
  items: Array<{fName: string, url: string}>;
login(username,password){
    this.http.get(this.host+'/log.php?userName='+username+'&password='+password).subscribe(data => {
      console.log(data['username']);
      this.storage.set('uname',data['username']).then(data=>{
       // window.location.reload();
      //  this.navCtrl.setRoot(HelloIonicPage);
       
        this.storage.set('errorMassege', 'Please waite..');
        return true;
      });  
    },
    (err: HttpErrorResponse)=>{
        this.storage.set('errorMassege',  'Something went wrong');
        return false;
    });
    return false;
    }
singUp2(  Fname,Lname,userName,password){
    let body = {Fname: Fname,
                  Lname:Lname,
                  userName:userName,
                  password:password
                  };


    console.log(body);
    this.http.post('https://getnewphonewithme.000webhostapp.com/sing.php',body).subscribe(data=>{
      this.storage.set('errorMassege',data['status'])
      console.log(data['errorMassege']);
    },(err: HttpErrorResponse)=>{
      this.storage.set('errorMassege',  'Something went wrong');
      console.log(err);
    }
    
  );

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
    this.storage.set('errorMassege',  'Eror');
    return false;
  });
  return false;
  }



  getLocalList(){
    this.items = [];
      this.file.listDir("file:///storage/emulated/0/DCIM","Camera").then((results) => {
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
            this.items.push({
              fName: results[i].name,
              url: results[i].nativeURL,
            });
        }
      }, (err) => { 
      });
      return this.items;
    }
  }