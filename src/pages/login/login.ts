import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import {ListPage} from '../list/list';
import { CreateAcountPage } from '../create-acount/create-acount';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import {AuthService} from '../../providers/auth-service/auth-service';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username = '';
  password = '';
  data = {};
  errmsg='';
  ip='http://192.168.1.4/MyPhp/newP/inc'

  

  constructor(public navCtrl: NavController,private authService:AuthService, public navParams: NavParams, private storage: Storage, private httpI: HTTP, private http: HttpClient) {
  }
  
  
    logNew(){
       this.storage.get('errorMassege').then(msg=>{
         this.errmsg=msg;
         this.authService.login(this.username,this.password);
       }).then(data=>{
          this.storage.get('uname').then(val=>{
          if(val!=null){
           this.navCtrl.setRoot(ListPage);
          }
         
        });
       });
       
       
         
       
        
      
    }
  setIP(){
    this.storage.set('IP',this.ip);
    this.authService.host=this.ip;
  }


  createAcount() {
    this.navCtrl.setRoot(CreateAcountPage);
  }
  ionViewDidLoad() {

  }
  
}
