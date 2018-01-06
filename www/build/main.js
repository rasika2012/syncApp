webpackJsonp([3],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams, imagePicker, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.auth = auth;
        this.items = [];
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 10,
            width: 800,
            height: 800,
            quality: 80
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.items.push({
                    title: results[i],
                    note: "ss"
                });
            }
        }, function (err) { });
    };
    ItemDetailsPage.prototype.itemTapped = function (event, item) {
    };
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-item-details',template:/*ion-inline-start:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\item-details\item-details.html"*/'<!--\n  Generated template for the BrowserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Quick Download</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-list>\n      <button ion-item *ngFor="let item of items" >\n        <ion-icon name="ios-folder" item-left></ion-icon>\n        {{item.title}}\n        <div class="item-note" item-right>\n          {{item.note}}\n          <button ion-button clear item-end (click)="itemTapped($event, item)">Local</button>\n        </div>\n      </button>\n    </ion-list>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\item-details\item-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrowserPage = (function () {
    function BrowserPage(navCtrl, photoLibrary, navParams, file, imagePicker) {
        this.navCtrl = navCtrl;
        this.photoLibrary = photoLibrary;
        this.navParams = navParams;
        this.file = file;
        this.imagePicker = imagePicker;
        this.path = this.file.externalRootDirectory;
        this.items = [];
        if (navParams.get('path') != null) {
            this.path = navParams.get('path');
        }
    }
    BrowserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.file.externalRootDirectory);
        console.log(this.path);
        var options = {
            maximumImagesCount: 10,
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.items.push({
                    title: results[i],
                    note: results[i],
                });
            }
        }, function (err) { });
    };
    BrowserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-browser',template:/*ion-inline-start:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\browser\browser.html"*/'<!--\n  Generated template for the BrowserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Quick Upload</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" >\n      <ion-thumbnail item-start>\n        <img src=" {{item.note}}">\n      </ion-thumbnail>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n\n \n\n\n</ion-content>\n'/*ion-inline-end:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\browser\browser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__["a" /* PhotoLibrary */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], BrowserPage);
    return BrowserPage;
}());

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAcountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CreateAcountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateAcountPage = (function () {
    function CreateAcountPage(navCtrl, authService, storage) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.storage = storage;
        this.errmsg = 'no err';
        this.userData = { "username": "", "password": "", "fname": "", "lname": "" };
    }
    CreateAcountPage.prototype.signup = function () {
        var _this = this;
        this.storage.get('errorMassege').then(function (msg) {
            _this.errmsg = msg;
        });
        this.authService.singUp(this.userData.fname, this.userData.lname, this.userData.username, this.userData.password);
        this.storage.get('status').then(function (msg) {
            if (msg == 'ok') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
        });
    };
    CreateAcountPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        console.log("restart");
    };
    CreateAcountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-acount',template:/*ion-inline-start:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\create-acount\create-acount.html"*/'<!--\n  Generated template for the CreateAcountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Create Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    \n       <ion-item>\n         <ion-label stacked>First Name</ion-label>\n         <ion-input type="text" [(ngModel)]="userData.fname"></ion-input>\n       </ion-item>\n \n       <ion-item>\n         <ion-label stacked>Last Name</ion-label>\n         <ion-input type="text" [(ngModel)]="userData.lname"></ion-input>\n       </ion-item>\n \n       <ion-item>\n         <ion-label stacked>Username</ion-label>\n         <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n       </ion-item>\n \n       <ion-item>\n         <ion-label stacked>Password</ion-label>\n         <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n       </ion-item>\n \n       <button ion-button full color="secondary" (click)="signup()">Sign up</button>\n       <a href="#" (click)="login()">Login Page</a>\n     </ion-list>\n     <ion-label >{{errmsg}}</ion-label>\n</ion-content>\n'/*ion-inline-end:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\create-acount\create-acount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], CreateAcountPage);
    return CreateAcountPage;
}());

//# sourceMappingURL=create-acount.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/browser/browser.module": [
		302,
		2
	],
	"../pages/create-acount/create-acount.module": [
		303,
		1
	],
	"../pages/login/login.module": [
		304,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingPage = (function () {
    function SettingPage(Auth, navCtrl, navParams, storage) {
        var _this = this;
        this.Auth = Auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.storage.get('settings.keepOriginal.cloud').then(function (val) {
            _this.cloudSet = val;
        });
        this.storage.get('settings.keepOriginal.device').then(function (val) {
            _this.deviceSet = val;
        });
        this.storage.get('uname').then(function (uname) {
            _this.userName = uname;
        });
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    SettingPage.prototype.setup = function () {
        this.storage.set('settings.keepOriginal.cloud', this.cloudSet);
        this.storage.set('settings.keepOriginal.device', this.deviceSet);
    };
    SettingPage.prototype.logout = function () {
        var _this = this;
        this.storage.set('uname', null).then(function (val) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            _this.storage.set('pw', null);
        });
    };
    SettingPage.prototype.deleteAll = function () {
        this.Auth.deleteCloudAll();
    };
    SettingPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting',template:/*ion-inline-start:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\setting\setting.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings:{{userName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-content>\n        <ion-list>\n        <ion-item>\n                <ion-label> Keep Original at Cloud</ion-label>\n                <ion-toggle [(ngModel)]="cloudSet" ></ion-toggle>\n        </ion-item>\n        <ion-item>\n            <ion-label> Keep Original at Device</ion-label>\n            <ion-toggle [(ngModel)]="deviceSet" ></ion-toggle>\n        </ion-item>   \n\n        <ion-item>\n            <button ion-button  block (click)="setup()">Save Settings</button>\n        </ion-item>  \n        <ion-item>\n            <button ion-button clear block>Delete Cloud</button>\n        </ion-item>  \n        <ion-item>\n            <button ion-button  block (click)="deleteAll()">Delete</button>\n        </ion-item>  \n\n        <div padding>\n          <button ion-button color="dark" block (click)="logout()">Logout</button>\n        </div>\n      </ion-list>\n       \n</ion-content>\n'/*ion-inline-end:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\setting\setting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_create_acount_create_acount__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_browser_browser__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_photo_library__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_chooser__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_image_picker__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cloudinary_angular_4_x__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cloudinary_angular_4_x___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__cloudinary_angular_4_x__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//import { Http ,Headers} from '@angular/http';

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_create_acount_create_acount__["a" /* CreateAcountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_browser_browser__["a" /* BrowserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/browser/browser.module#BrowserPageModule', name: 'BrowserPage', segment: 'browser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-acount/create-acount.module#CreateAcountPageModule', name: 'CreateAcountPage', segment: 'create-acount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22__cloudinary_angular_4_x__["CloudinaryModule"].forRoot({ Cloudinary: __WEBPACK_IMPORTED_MODULE_22__cloudinary_angular_4_x__["Cloudinary"] }, { cloud_name: 'dv4fyvxxz' }),
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_create_acount_create_acount__["a" /* CreateAcountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_browser_browser__["a" /* BrowserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["b" /* FileTransferObject */],
                //Http ,Headers,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_setting_setting__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */];
        this.initializeApp();
        var Page;
        // set our app's pages
        this.pages = [
            { title: 'One Touch Acces', component: __WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */], icon: "paper-plane" },
            //{ title: 'Quick Acces', component: HelloIonicPage,icon: "boat" },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_3__pages_setting_setting__["a" /* SettingPage */], icon: "build" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.storage.get('settings.keepOriginal.cloud').then(function (val) {
                if (val == null) {
                    _this.storage.set('settings.keepOriginal.cloud', false);
                    _this.storage.set('settings.keepOriginal.device', false);
                }
            });
            _this.storage.get('uname').then(function (val) {
                if (val == null) {
                    console.log('Your uname is', val);
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                }
            }).then(function (data) {
            });
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.storage.get('uname').then(function (val) {
            if (val == null) {
                console.log('Your uname is', val);
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
        }).then(function (data) {
        });
        this.storage.get('uname').then(function (val) {
            _this.nav.setRoot(page.component);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header >\n    <ion-toolbar color="secondary">\n      \n      <ion-title  >PeraSync</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" ></ion-icon>\n        {{p.title}} \n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_image_picker__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_browser__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_details_item_details__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelloIonicPage = (function () {
    function HelloIonicPage(imagePicker, navCtrl) {
        this.imagePicker = imagePicker;
        this.navCtrl = navCtrl;
    }
    HelloIonicPage.prototype.addFiles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__browser_browser__["a" /* BrowserPage */], {});
    };
    HelloIonicPage.prototype.getFiles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__item_details_item_details__["a" /* ItemDetailsPage */], {});
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> <ion-icon name="paper-plane"></ion-icon> Quick Acces</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n \n    \n    <ion-content>\n        \n    <button ion-button color="dark" (click)="getFiles()"  block>\n      <ion-icon name="paper-plane" ></ion-icon> \'Quick Download\n    </button>\n   \n    <button ion-button color="secondary" (click)="addFiles()"block>\n    Quick Upload\n    </button>\n\n  </ion-content>\n\n</ion-content>\n'/*ion-inline-end:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(fileTrafer1, transfer, loadingCtrl, http, storage, storage2, file, alertCtrl) {
        this.fileTrafer1 = fileTrafer1;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.storage = storage;
        this.storage2 = storage2;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.lastImage = null;
        // = 'http://192.168.1.4/MyPhp/newP/inc';
        this.host = 'https://freesynctest.000webhostapp.com/inc';
        this.hostNet = 'http://projecte14.atwebpages.com/inc/';
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        this.http.get(this.host + '/log.php?userName=' + username + '&password=' + password).subscribe(function (data) {
            console.log(data['username']);
            _this.name = data['username'];
            _this.storage.set('uname', data['username']).then(function (data) {
                _this.storage.set('errorMassege', 'Please wait..');
                return true;
            });
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Loging Failed',
                subTitle: 'Check your User name and Password or net connection',
                buttons: ['OK']
            });
            alert.present();
            _this.storage.set('errorMassege', 'Something went wrong');
            return false;
        });
        return false;
    };
    //http://projecte14.atwebpages.com
    AuthService.prototype.singUp = function (Fname, Lname, userName, password) {
        var _this = this;
        this.http.get(this.host + '/sing.php?Fname=' + Fname + '&Lname=' + Lname + '&userName=' + userName + '&password=' + password).subscribe(function (data) {
            console.log(data['status']);
            _this.storage.set('status', data['status']).then(function (val) {
                _this.storage.set('errorMassege', data['status']);
                return true;
            });
        }, function (err) {
            _this.storage.set('errorMassege', 'Cannot Create acout now');
            return false;
        });
        return false;
    };
    AuthService.prototype.getLocalList = function () {
        var _this = this;
        this.itemsLocal = [];
        this.file.listDir("file:///storage/emulated/0/DCIM", "Camera").then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                _this.storage2.get('uname').then(function (val) {
                    _this.name = val;
                });
                _this.itemsLocal.push({
                    fName: results[i].name,
                    url: results[i].nativeURL,
                    uploaded: 'local',
                    uploadVal: false,
                    index: _this.itemsLocal.length
                });
            }
            //this.storage.set('ss','ff');
        }).then(function (val) {
        });
        return this.itemsLocal;
    };
    AuthService.prototype.uploadFile = function (selectedItem) {
        var _this = this;
        // Destination URL
        var url = this.host + "/uplode.php" + '?userName=' + this.name;
        var path = selectedItem.url;
        var fileName = selectedItem.fName;
        // File for Upload
        var targetPath = path;
        //var Path =this.file.readAsDataURL("file:///storage/emulated/0/DCIM/Camera/",fileName)     
        //
        var imagePath = path.substr(0, path.lastIndexOf('/') + 1);
        var imageName = path.substr(path.lastIndexOf('/') + 1);
        var filename = fileName;
        var uName;
        this.storage.get('uname').then(function (data) {
            uName = data;
        });
        var options = {
            fileKey: "fileToUpload",
            fileName: filename,
            chunkedMode: true,
            mimeType: "multipart/form-data",
            params: { 'name': filename, 'fileKey': 21213, 'userName': uName }
        };
        var fileT = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */]();
        var fileTransfer = this.fileTrafer1.create();
        fileTransfer.upload(path, url, options).then(function (data) {
            /* let alert = this.alertCtrl.create({
              title:'Succesfully Uploaded', //data.response,
              subTitle:data.response+'done',
              buttons: ['OK']
            });
           
            alert.present(); */
            _this.storage.get('settings.keepOriginal.device').then(function (val) {
                if (val == false) {
                    _this.file.removeFile(imagePath, fileName);
                }
            });
            selectedItem.uploaded = 'cloud';
            selectedItem.uploadVal = true;
        }, function (err) {
            _this.storage.set('file:' + filename, 'done');
            var alert = _this.alertCtrl.create({
                title: "File not uploaded",
                subTitle: "File failed to upload.Error:" + err.code,
                buttons: ['OK']
            });
            alert.present();
            _this.loading.dismiss();
            selectedItem.uploaded = 'local';
            selectedItem.uploadVal = false;
            selectedItem.url = _this.host + '/img/' + _this.name + '/';
        });
    };
    AuthService.prototype.getCloudList = function () {
        var _this = this;
        this.itemsCloud = [];
        var dataset;
        this.storage.get('uname').then(function (val) {
            _this.name = val;
            _this.http.get(_this.host + '/get.php?userName=' + _this.name).subscribe(function (data) {
                dataset = data;
                for (var i = 0; i < dataset.length; i++) {
                    _this.itemsCloud.push({
                        fName: dataset[i],
                        url: _this.host + '/img/' + _this.name + '/',
                        uploaded: 'cloud',
                        uploadVal: true,
                        index: _this.itemsCloud.length
                    });
                }
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: "Cant connected to server",
                    subTitle: 'Please check data connection',
                    buttons: ['OK']
                });
                alert.present();
            });
        }).then(function (val) {
        });
        return this.itemsCloud;
    };
    AuthService.prototype.download = function (selectedItem) {
        var _this = this;
        var fileName = selectedItem.fName;
        var fileTransfer = this.fileTrafer1.create();
        var url = this.host + '/img/' + this.name + '/' + fileName;
        fileTransfer.download(url, 'file:///storage/emulated/0/DCIM/Camera/' + fileName).then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            /*  let alert = this.alertCtrl.create({
               title:"Done",
               subTitle:'Download complete: ' + entry.toURL(),
               buttons: ['OK']
             });
             //this.navctrl.setRoot(ListPage);
             alert.present() */
            _this.storage.get('settings.keepOriginal.cloud').then(function (val) {
                if (val == false) {
                    _this.deleteCloud(selectedItem);
                }
            });
            selectedItem.uploaded = 'local';
            selectedItem.uploadVal = false;
            selectedItem.url = "file:///storage/emulated/0/DCIM/Camera/";
            return selectedItem;
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: "File not Downloaded",
                subTitle: "File failed to Download.Error:" + err.code,
                buttons: ['OK']
            });
            alert.present();
            return selectedItem;
        });
    };
    AuthService.prototype.deleteCloud = function (selectedItem) {
        var _this = this;
        this.storage.get('uname').then(function (val) {
            _this.name = val;
            _this.http.get(_this.host + '/delete.php?userName=' + val + '&imgName=' + selectedItem.fName).subscribe(function (val) {
                var retItem = selectedItem;
                retItem.uploaded = 'Deleted';
                retItem.fName = 'This file was deleted';
                return retItem;
            });
        });
    };
    AuthService.prototype.deleteCloudAll = function () {
        for (var i = 0; i < this.itemsCloud.length; i++) {
            this.deleteCloud(this.itemsCloud[i]);
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_acount_create_acount__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, authService, navParams, storage, httpI, http) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.storage = storage;
        this.httpI = httpI;
        this.http = http;
        this.username = '';
        this.password = '';
        this.data = {};
        this.errmsg = '';
        this.ip = 'http://192.168.1.4/MyPhp/newP/inc';
    }
    LoginPage.prototype.logNew = function () {
        var _this = this;
        this.storage.get('errorMassege').then(function (msg) {
            _this.errmsg = msg;
            _this.authService.login(_this.username, _this.password);
        }).then(function (data) {
            _this.storage.get('uname').then(function (val) {
                if (val != null) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
                }
            });
        });
    };
    LoginPage.prototype.setIP = function () {
        this.storage.set('IP', this.ip);
        this.authService.host = this.ip;
    };
    LoginPage.prototype.createAcount = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__create_acount_create_acount__["a" /* CreateAcountPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="secondary">\n      <br>\n        <ion-title><ion-icon  name="paper-plane"  ></ion-icon>Welcome</ion-title>\n        <br>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n  <ion-list>\n    \n    <!-- <ion-item>\n\n      <ion-label floating>SetYour IP</ion-label>\n        <ion-input type="text" [(ngModel)]="ip">http://192.168.1.4/myphp/newP/inc/</ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button  block (click)="setIP()">Set</button>\n    </ion-item> -->\n    \n    <br>\n    <br>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" id="pw" [(ngModel)]="password"v></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div >\n    <button ion-button color="secondary" block large (click)="logNew()">LogIn</button>\n    <button ion-button color="dark" block (click)="createAcount()">Create Acount</button>\n  </div>\n  <!-- <ion-label floating>{{errmsg}}</ion-label> -->\n</ion-content>\n'/*ion-inline-end:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListPage = (function () {
    function ListPage(navCtrl, storage, auth, photoLibrary, file, navParams, fileChooser) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.auth = auth;
        this.photoLibrary = photoLibrary;
        this.file = file;
        this.navParams = navParams;
        this.fileChooser = fileChooser;
        this.msgBar = 'Welcome to Pera sync';
        this.itemsLocal = [];
        this.itemsLocal = this.auth.getLocalList();
        this.itemsCloud = [];
        this.itemsCloud = this.auth.getCloudList();
        /* this.itemsCloud = [];
        this.itemsCloud.push({
          fName:'Test Entri',
          url:'Not Valid',
          uploaded:'not set',
          uploadVal:true,
          index:this.itemsCloud.length
        });  */
    }
    ListPage.prototype.itemTapped = function (event, item) {
        var _this = this;
        var tmpItem = item;
        if (item.uploadVal == false) {
            item.uploaded = 'waite';
            this.itemsLocal[item.index] = item;
            item = this.auth.uploadFile(item);
            this.itemsLocal[item.index] = item;
            //window.location.reload();
            //this.navCtrl.setRoot(ListPage);
            this.storage.get('settings.keepOriginal.device').then(function (val) {
                if (val == false) {
                    _this.itemsLocal[item.index].fName = 'Deleted';
                }
            });
        }
        else {
            item.uploaded = 'waite';
            this.itemsCloud[item.index] = item;
            item = this.auth.download(item);
            this.itemsCloud[item.index] = item;
            this.storage.get('settings.keepOriginal.device').then(function (val) {
                if (val == false) {
                    _this.itemsCloud[item.index].fName = 'Deleted';
                }
            });
            // this.navCtrl.setRoot(ListPage);
        }
    };
    ListPage.prototype.upload = function () {
        for (var i = 0; i < this.itemsLocal.length; i++) {
            var item = this.itemsLocal[i];
            var tmpItem = item;
            var aut;
            if (item.uploadVal == false) {
                item.uploaded = 'waite';
                this.itemsLocal[item.index] = item;
                item = aut.uploadFile(item);
                this.itemsLocal[item.index] = item;
                //window.location.reload();
                //this.navCtrl.setRoot(ListPage);
            }
        }
    };
    ListPage.prototype.download = function () {
        for (var i = 0; i < this.itemsCloud.length; i++) {
            var item = this.itemsCloud[i];
            var tmpItem = item;
            var aut;
            if (item.uploadVal == true) {
                item.uploaded = 'waite';
                this.itemsCloud[item.index] = item;
                item = aut.download(item);
                this.itemsCloud[item.index] = item;
            }
        }
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\list\list.html"*/'<ion-header >\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <div padding>\n      <ion-segment [(ngModel)]="dir" small color="light" block>\n        <ion-segment-button value="cloud" round>\n          <ion-icon name="cloud"></ion-icon>\n           \n        </ion-segment-button>\n        <ion-segment-button value="device" round>\n          <ion-icon name="phone-portrait"></ion-icon>\n          \n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <!-- <button ion-button small color="light" item-end>{{msgBar}}(Beta)</button> -->\n  </ion-navbar>\n\n  \n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="dir">\n  <ion-list *ngSwitchDefault>\n    \n    <ion-item *ngFor="let item of itemsCloud">\n      <ion-icon  name="ios-image-outline" item-start></ion-icon>\n      \n      <button ion-button color="dark" (click)="itemTapped($event, item)" clear item-start>\n      <h2>{{item.fName}}</h2>\n      </button>\n       <button ion-button small clear (click)="itemTapped($event, item)" color="secondary" item-end>\n      {{item.uploaded}}</button> \n      <!-- <ion-icon name=" {{item.uploaded}}" ></ion-icon> -->\n    </ion-item>\n  \n </ion-list>\n\n <ion-list *ngSwitchCase="\'device\'">\n    \n    <ion-item *ngFor="let item of itemsLocal">\n      <ion-icon  name="ios-image-outline" item-start></ion-icon>\n      \n      <button ion-button color="dark" (click)="itemTapped($event, item)" clear item-start>\n        <h2>{{item.fName}}</h2>\n        </button>\n        <button ion-button small clear (click)="itemTapped($event, item)" color="secondary" item-end>\n      {{item.uploaded}}</button>  \n     \n    </ion-item>\n  \n </ion-list>\n\n</div>\n</ion-content>\n<ion-footer>\n   \n       \n          <ion-item color="secondary" block>\n            \n        <button ion-button (click)="upload()" color="light" clear icon-only  item-start>\n            <ion-icon name="cloud-upload"></ion-icon>Upload</button>\n          <button ion-button (click)="download()" color="light" clear   icon-only item-end>\n            Download <ion-icon name="md-download"></ion-icon>\n\n          </button>\n        \n        </ion-item>\n        \n  \n  </ion-footer>\n'/*ion-inline-end:"D:\ShortSem\CO227\SyncApp\e14 - Copy\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__["a" /* PhotoLibrary */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map