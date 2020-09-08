(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["predictions-predictions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div [hidden]=!this.logged_in_wait>\n\n\n    \n<ion-header [translucent]=\"true\">\n  \n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" display=\"inline-block\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"block\"  color=\"tertiary\" shape=\"round\" (click)=\"this.login.logout()\">\n        <ion-text style=\"color:white\"> Logout </ion-text>\n        <ion-icon slot=\"icon-only\" name=\"log-out\" style='color:white'  ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style= \"position: absolute; \">{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card style=\"background-color:#90D377; width: 93vw;\"> \n    <ion-card-title style=\"text-align:center; margin-top:4px; color:white\">Bitcoin</ion-card-title>\n    <ion-card-content>\n\n  <div id =\"tbl_btc\">\n    <table style='width: 100%'>\n  <tr>\n    <th *ngFor = \"let column of headers_2\">{{column}}</th>\n  </tr>\n  <tr *ngFor = \"let prediction_btc of predictions_btc\">\n    <td *ngFor = \"let column of headers\">\n      {{prediction_btc[column]}}\n    </td><td style='width:8%'><ion-buttons slot=\"end\">\n\n              \n      <ion-icon name=\"trash\" style='color:black; ' (click)=\"delete_item(prediction_btc,'btc')\"></ion-icon>\n    </ion-buttons></td> \n  </tr>\n</table>\n</div>\n</ion-card-content>\n</ion-card>\n<ion-card style=\"background-color:#E56F49; width: 93vw;\"> \n  <ion-card-title style=\"text-align:center; margin-top:4px; color:white\">Ethereum</ion-card-title>\n    <ion-card-content>\n\n  <div id =\"tbl_eth\">\n    <table style='width: 100%'>\n      <tr>\n        <th *ngFor = \"let column of headers_2\">{{column}}</th>\n      </tr>\n  <tr *ngFor = \"let prediction_eth of predictions_eth\">\n    <td *ngFor = \"let column of headers\">\n      {{prediction_eth[column]}}\n    </td><td style='width:8%'><ion-buttons slot=\"end\">\n\n              \n      <ion-icon style= \"font-size: 25px; \"  name=\"trash\" style='color:black' (click)=\"delete_item(prediction_eth,'eth')\"></ion-icon>\n    </ion-buttons></td> \n  </tr>\n</table>\n</div>\n</ion-card-content>\n</ion-card>\n  <!-- <ion-grid>\n    <ion-row>\n     \n      <ion-col>\n        <ion-card class=\"no-padding\">\n          <ion-card-header>\n            \n           <span style=\"font-size:30px; color:white;padding-top:40px\">Your predictions</span>\n            \n            \n            <div class='del'style=\"float: right; margin-right:-3vw\">\n            <ion-icon style= \"font-size: 30px\"  name=\"trash\" (click)=\"delete_all()\">\n          </ion-icon>\n          <p style=\" font-size: 12px; text-align:center; margin-top: -0.6vh;\">Del</p>\n        </div>\n\n          \n        </ion-card-header>\n       \n\n\n          <ion-list class=\"no-scroll no-padding\">\n      \n\n          <div *ngFor=\"let prediction of predictions index as index\">\n  \n          <ion-item  class=\"no-padding\">\n            <ion-thumbnail>\n              <ion-img class=\"imgmg\" src=\"{{prediction.type}}\"></ion-img>\n            </ion-thumbnail> \n            <ion-buttons slot=\"end\">\n\n              \n        <ion-icon style= \"font-size: 25px; margin-right: -1vw\"  name=\"trash\" style='color:red' (click)=\"delete_item(prediction)\"></ion-icon>\n      </ion-buttons>\n      <ion-label>{{ prediction.price }} </ion-label>\n      <ion-label>{{prediction.day_month}}</ion-label>\n    </ion-item>\n          \n        \n       </div>\n          </ion-list>\n         \n\n        </ion-card>\n        \n      </ion-col>\n    \n    </ion-row>\n  </ion-grid>\n   -->\n  \n</ion-content>\n</div>");

/***/ }),

/***/ "./src/app/predictions/predictions-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/predictions/predictions-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PredictionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsPageRoutingModule", function() { return PredictionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _predictions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./predictions.page */ "./src/app/predictions/predictions.page.ts");




const routes = [
    {
        path: '',
        component: _predictions_page__WEBPACK_IMPORTED_MODULE_3__["PredictionsPage"]
    }
];
let PredictionsPageRoutingModule = class PredictionsPageRoutingModule {
};
PredictionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PredictionsPageRoutingModule);



/***/ }),

/***/ "./src/app/predictions/predictions.module.ts":
/*!***************************************************!*\
  !*** ./src/app/predictions/predictions.module.ts ***!
  \***************************************************/
/*! exports provided: PredictionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsPageModule", function() { return PredictionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./predictions-routing.module */ "./src/app/predictions/predictions-routing.module.ts");
/* harmony import */ var _predictions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./predictions.page */ "./src/app/predictions/predictions.page.ts");







let PredictionsPageModule = class PredictionsPageModule {
};
PredictionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__["PredictionsPageRoutingModule"]
        ],
        declarations: [_predictions_page__WEBPACK_IMPORTED_MODULE_6__["PredictionsPage"]]
    })
], PredictionsPageModule);



/***/ }),

/***/ "./src/app/predictions/predictions.page.scss":
/*!***************************************************!*\
  !*** ./src/app/predictions/predictions.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#tbl_btc td {\n  border: 1px solid black;\n  padding: 4px;\n  background-color: #015f01d5;\n  color: white;\n  text-align: center;\n}\n\n#tbl_btc th {\n  border: 1px solid black;\n  padding: 4px;\n  background-color: white;\n  text-align: center;\n}\n\n#tbl_eth th {\n  border: 1px solid black;\n  padding: 4px;\n  background-color: white;\n  text-align: center;\n}\n\n#tbl_eth td {\n  border: 1px solid black;\n  padding: 4px;\n  background-color: #A24E33;\n  color: white;\n  text-align: center;\n}\n\nion-content {\n  --ion-background-color:black;\n}\n\nion-title, ion-toolbar, ion-header {\n  font-size: 120%;\n  color: white;\n  font-weight: bold;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-toolbar, ion-header {\n  --min-height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZGljdGlvbnMvQzpcXFVzZXJzXFxNYXggQm9zY2hcXHRoZXNpcy9zcmNcXGFwcFxccHJlZGljdGlvbnNcXHByZWRpY3Rpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJlZGljdGlvbnMvcHJlZGljdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDSixZQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDQTs7QURDQTtFQUFZLHVCQUFBO0VBQ1IsWUFBQTtFQUNBLHVCQUFBO0VBQ0osa0JBQUE7QUNHQTs7QUREQTtFQUFZLHVCQUFBO0VBQ1IsWUFBQTtFQUNBLHVCQUFBO0VBQ0osa0JBQUE7QUNLQTs7QURGQTtFQUNJLHVCQUFBO0VBQ0osWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDS0E7O0FESEE7RUFDSSw0QkFBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ09KOztBREhJO0VBQ0ksK0JBQUE7QUNNUjs7QURKTTtFQUNFLGtCQUFBO0FDT1IiLCJmaWxlIjoic3JjL2FwcC9wcmVkaWN0aW9ucy9wcmVkaWN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGJsX2J0YyB0ZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5wYWRkaW5nOjRweDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzAxNWYwMWQ1O1xyXG5jb2xvcjp3aGl0ZTtcclxudGV4dC1hbGlnbjpjZW50ZXJ9XHJcblxyXG4jdGJsX2J0YyB0aHtib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnRleHQtYWxpZ246Y2VudGVyfVxyXG5cclxuI3RibF9ldGggdGh7Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG50ZXh0LWFsaWduOmNlbnRlcn1cclxuXHJcblxyXG4jdGJsX2V0aCB0ZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5wYWRkaW5nOjRweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI0EyNEUzMztcclxuY29sb3I6d2hpdGU7XHJcbnRleHQtYWxpZ246Y2VudGVyfVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gIH1cclxuaW9uLXRpdGxlLCBpb24tdG9vbGJhciwgaW9uLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogNjBweDtcclxuICAgICAgIH0iLCIjdGJsX2J0YyB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTVmMDFkNTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0YmxfYnRjIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RibF9ldGggdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdGJsX2V0aCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBMjRFMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6YmxhY2s7XG59XG5cbmlvbi10aXRsZSwgaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xuICBmb250LXNpemU6IDEyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcbiAgLS1taW4taGVpZ2h0OiA2MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/predictions/predictions.page.ts":
/*!*************************************************!*\
  !*** ./src/app/predictions/predictions.page.ts ***!
  \*************************************************/
/*! exports provided: PredictionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsPage", function() { return PredictionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");





let PredictionsPage = class PredictionsPage {
    constructor(storage, alertCtrl, login) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.login = login;
        this.predictions_btc = [];
        this.predictions_eth = [];
        this.title = "Predictions";
        this.loaded = false;
        this.headers = ["day_month", "price"];
        this.headers_2 = ["Day-Month Hour", "Price"];
    }
    load() {
        return new Promise((resolve) => {
            this.storage.get('predictions_btc').then((predictions_btc) => {
                if (predictions_btc != null) {
                    this.predictions_btc = predictions_btc;
                }
            });
            this.storage.get('predictions_eth').then((predictions_eth) => {
                if (predictions_eth != null) {
                    this.predictions_eth = predictions_eth;
                }
                this.loaded = true;
                resolve(true);
            });
        });
    }
    delete_item(prediction, thing) {
        if (thing == 'eth') {
            let index = this.predictions_eth.indexOf(prediction);
            if (index > -1) {
                this.predictions_eth.splice(index, 1);
                this.storage.set('predictions_eth', this.predictions_eth);
                return { 'index': index };
            }
            else {
                return { 'index': 0 };
            }
        }
        else {
            let index = this.predictions_btc.indexOf(prediction);
            if (index > -1) {
                this.predictions_btc.splice(index, 1);
                this.storage.set('predictions_btc', this.predictions_btc);
                return { 'index': index };
            }
            else {
                return { 'index': 0 };
            }
        }
    }
    isLoggedin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { this.logged_in_wait = yield this.login.check_token(); });
    }
    ngOnInit() {
        this.isLoggedin();
        this.load();
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.isLoggedin();
            return { 'done': true };
        });
    }
};
PredictionsPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
PredictionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-predictions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./predictions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./predictions.page.scss */ "./src/app/predictions/predictions.page.scss")).default]
    })
], PredictionsPage);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let LoginService = class LoginService {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    check_token() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var res = yield this.storage.get('token');
            if (res == null) {
                this.router.navigate(['login']);
            }
            else {
                return true;
            }
            ;
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.set('token', null);
            this.router.navigate(['login']);
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ })

}]);
//# sourceMappingURL=predictions-predictions-module-es2015.js.map