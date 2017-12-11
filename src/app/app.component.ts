import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { SettingPage } from '../pages/setting/setting';
import {LoginPage} from '../pages/login/login'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)  nav: Nav;

  // make HelloIonicPage the root (or first) page
  public rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any,icon:string}>;

 
  
   
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage
   
  ) {
    this.initializeApp();
  
    // set our app's pages
    this.pages = [
      { title: 'Quick Acces', component: HelloIonicPage,icon: "paper-plane" },
      { title: 'Advanced and Explore', component: ListPage ,icon: "boat"},
      { title: 'Settings', component: SettingPage,icon: "build" }
    ]; 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.storage.get('uname').then((val) => {
        
         if(val==null){
           console.log('Your uname is', val);
           this.nav.setRoot(LoginPage);
         }
     }).then(data=>{
      this.splashScreen.hide();
     })
      

      
     
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.storage.get('uname').then((val) => {
     
    this.nav.setRoot(page.component);
  });
    
    
  }
}
