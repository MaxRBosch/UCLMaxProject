function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["predictions-predictions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPredictionsPredictionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <div [hidden]=!this.logged_in_wait>\n\n\n    \n<ion-header [translucent]=\"true\">\n  \n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" display=\"inline-block\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"block\"  color=\"tertiary\" shape=\"round\" (click)=\"this.login.logout()\">\n        <ion-text style=\"color:white\"> Logout </ion-text>\n        <ion-icon slot=\"icon-only\" name=\"log-out\" style='color:white'  ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style= \"position: absolute; \">{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card style=\"background-color:#90D377; width: 93vw;\"> \n    <ion-card-title style=\"text-align:center; margin-top:4px; color:white\">Bitcoin</ion-card-title>\n    <ion-card-content>\n\n  <div id =\"tbl_btc\">\n    <table style='width: 100%'>\n  <tr>\n    <th *ngFor = \"let column of headers_2\">{{column}}</th>\n  </tr>\n  <tr *ngFor = \"let prediction_btc of predictions_btc\">\n    <td *ngFor = \"let column of headers\">\n      {{prediction_btc[column]}}\n    </td><td style='width:8%'><ion-buttons slot=\"end\">\n\n              \n      <ion-icon name=\"trash\" style='color:black; ' (click)=\"delete_item(prediction_btc,'btc')\"></ion-icon>\n    </ion-buttons></td> \n  </tr>\n</table>\n</div>\n</ion-card-content>\n</ion-card>\n<ion-card style=\"background-color:#E56F49; width: 93vw;\"> \n  <ion-card-title style=\"text-align:center; margin-top:4px; color:white\">Ethereum</ion-card-title>\n    <ion-card-content>\n\n  <div id =\"tbl_eth\">\n    <table style='width: 100%'>\n      <tr>\n        <th *ngFor = \"let column of headers_2\">{{column}}</th>\n      </tr>\n  <tr *ngFor = \"let prediction_eth of predictions_eth\">\n    <td *ngFor = \"let column of headers\">\n      {{prediction_eth[column]}}\n    </td><td style='width:8%'><ion-buttons slot=\"end\">\n\n              \n      <ion-icon style= \"font-size: 25px; \"  name=\"trash\" style='color:black' (click)=\"delete_item(prediction_eth,'eth')\"></ion-icon>\n    </ion-buttons></td> \n  </tr>\n</table>\n</div>\n</ion-card-content>\n</ion-card>\n  <!-- <ion-grid>\n    <ion-row>\n     \n      <ion-col>\n        <ion-card class=\"no-padding\">\n          <ion-card-header>\n            \n           <span style=\"font-size:30px; color:white;padding-top:40px\">Your predictions</span>\n            \n            \n            <div class='del'style=\"float: right; margin-right:-3vw\">\n            <ion-icon style= \"font-size: 30px\"  name=\"trash\" (click)=\"delete_all()\">\n          </ion-icon>\n          <p style=\" font-size: 12px; text-align:center; margin-top: -0.6vh;\">Del</p>\n        </div>\n\n          \n        </ion-card-header>\n       \n\n\n          <ion-list class=\"no-scroll no-padding\">\n      \n\n          <div *ngFor=\"let prediction of predictions index as index\">\n  \n          <ion-item  class=\"no-padding\">\n            <ion-thumbnail>\n              <ion-img class=\"imgmg\" src=\"{{prediction.type}}\"></ion-img>\n            </ion-thumbnail> \n            <ion-buttons slot=\"end\">\n\n              \n        <ion-icon style= \"font-size: 25px; margin-right: -1vw\"  name=\"trash\" style='color:red' (click)=\"delete_item(prediction)\"></ion-icon>\n      </ion-buttons>\n      <ion-label>{{ prediction.price }} </ion-label>\n      <ion-label>{{prediction.day_month}}</ion-label>\n    </ion-item>\n          \n        \n       </div>\n          </ion-list>\n         \n\n        </ion-card>\n        \n      </ion-col>\n    \n    </ion-row>\n  </ion-grid>\n   -->\n  \n</ion-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/predictions/predictions-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/predictions/predictions-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: PredictionsPageRoutingModule */

  /***/
  function srcAppPredictionsPredictionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsPageRoutingModule", function () {
      return PredictionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _predictions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./predictions.page */
    "./src/app/predictions/predictions.page.ts");

    var routes = [{
      path: '',
      component: _predictions_page__WEBPACK_IMPORTED_MODULE_3__["PredictionsPage"]
    }];

    var PredictionsPageRoutingModule = function PredictionsPageRoutingModule() {
      _classCallCheck(this, PredictionsPageRoutingModule);
    };

    PredictionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PredictionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/predictions/predictions.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/predictions/predictions.module.ts ***!
    \***************************************************/

  /*! exports provided: PredictionsPageModule */

  /***/
  function srcAppPredictionsPredictionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsPageModule", function () {
      return PredictionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./predictions-routing.module */
    "./src/app/predictions/predictions-routing.module.ts");
    /* harmony import */


    var _predictions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./predictions.page */
    "./src/app/predictions/predictions.page.ts");

    var PredictionsPageModule = function PredictionsPageModule() {
      _classCallCheck(this, PredictionsPageModule);
    };

    PredictionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__["PredictionsPageRoutingModule"]],
      declarations: [_predictions_page__WEBPACK_IMPORTED_MODULE_6__["PredictionsPage"]]
    })], PredictionsPageModule);
    /***/
  },

  /***/
  "./src/app/predictions/predictions.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/predictions/predictions.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPredictionsPredictionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#tbl_btc td {\n  border: 1px solid black;\n  padding: 4px;\n  background-color: #015f01d5;\n  color: white;\n  text-align: center;\n}\n\n#tbl_btc th {\n  border: 1px solid black;\n  padding: 4px;\n  background-color: white;\n  text-align: center;\n}\n\n#tbl_eth th {\n  border: 1px solid black;\n  padding: 4px;\n  background-color: white;\n  text-align: center;\n}\n\n#tbl_eth td {\n  border: 1px solid black;\n  padding: 4px;\n  background-color: #A24E33;\n  color: white;\n  text-align: center;\n}\n\nion-content {\n  --ion-background-color:black;\n}\n\nion-title, ion-toolbar, ion-header {\n  font-size: 120%;\n  color: white;\n  font-weight: bold;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-toolbar, ion-header {\n  --min-height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZGljdGlvbnMvQzpcXFVzZXJzXFxNYXggQm9zY2hcXHRoZXNpcy9zcmNcXGFwcFxccHJlZGljdGlvbnNcXHByZWRpY3Rpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJlZGljdGlvbnMvcHJlZGljdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDSixZQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDQTs7QURDQTtFQUFZLHVCQUFBO0VBQ1IsWUFBQTtFQUNBLHVCQUFBO0VBQ0osa0JBQUE7QUNHQTs7QUREQTtFQUFZLHVCQUFBO0VBQ1IsWUFBQTtFQUNBLHVCQUFBO0VBQ0osa0JBQUE7QUNLQTs7QURGQTtFQUNJLHVCQUFBO0VBQ0osWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDS0E7O0FESEE7RUFDSSw0QkFBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ09KOztBREhJO0VBQ0ksK0JBQUE7QUNNUjs7QURKTTtFQUNFLGtCQUFBO0FDT1IiLCJmaWxlIjoic3JjL2FwcC9wcmVkaWN0aW9ucy9wcmVkaWN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGJsX2J0YyB0ZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5wYWRkaW5nOjRweDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzAxNWYwMWQ1O1xyXG5jb2xvcjp3aGl0ZTtcclxudGV4dC1hbGlnbjpjZW50ZXJ9XHJcblxyXG4jdGJsX2J0YyB0aHtib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnRleHQtYWxpZ246Y2VudGVyfVxyXG5cclxuI3RibF9ldGggdGh7Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG50ZXh0LWFsaWduOmNlbnRlcn1cclxuXHJcblxyXG4jdGJsX2V0aCB0ZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5wYWRkaW5nOjRweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI0EyNEUzMztcclxuY29sb3I6d2hpdGU7XHJcbnRleHQtYWxpZ246Y2VudGVyfVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gIH1cclxuaW9uLXRpdGxlLCBpb24tdG9vbGJhciwgaW9uLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogNjBweDtcclxuICAgICAgIH0iLCIjdGJsX2J0YyB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTVmMDFkNTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0YmxfYnRjIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RibF9ldGggdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdGJsX2V0aCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBMjRFMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6YmxhY2s7XG59XG5cbmlvbi10aXRsZSwgaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xuICBmb250LXNpemU6IDEyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcbiAgLS1taW4taGVpZ2h0OiA2MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/predictions/predictions.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/predictions/predictions.page.ts ***!
    \*************************************************/

  /*! exports provided: PredictionsPage */

  /***/
  function srcAppPredictionsPredictionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsPage", function () {
      return PredictionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");

    var PredictionsPage = /*#__PURE__*/function () {
      function PredictionsPage(storage, alertCtrl, login) {
        _classCallCheck(this, PredictionsPage);

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

      _createClass(PredictionsPage, [{
        key: "load",
        value: function load() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.storage.get('predictions_btc').then(function (predictions_btc) {
              if (predictions_btc != null) {
                _this.predictions_btc = predictions_btc;
              }
            });

            _this.storage.get('predictions_eth').then(function (predictions_eth) {
              if (predictions_eth != null) {
                _this.predictions_eth = predictions_eth;
              }

              _this.loaded = true;
              resolve(true);
            });
          });
        }
      }, {
        key: "delete_item",
        value: function delete_item(prediction, thing) {
          if (thing == 'eth') {
            var index = this.predictions_eth.indexOf(prediction);

            if (index > -1) {
              this.predictions_eth.splice(index, 1);
              this.storage.set('predictions_eth', this.predictions_eth);
              return {
                'index': index
              };
            } else {
              return {
                'index': 0
              };
            }
          } else {
            var _index = this.predictions_btc.indexOf(prediction);

            if (_index > -1) {
              this.predictions_btc.splice(_index, 1);
              this.storage.set('predictions_btc', this.predictions_btc);
              return {
                'index': _index
              };
            } else {
              return {
                'index': 0
              };
            }
          }
        }
      }, {
        key: "isLoggedin",
        value: function isLoggedin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.login.check_token();

                  case 2:
                    this.logged_in_wait = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedin();
          this.load();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.isLoggedin();

                  case 2:
                    return _context2.abrupt("return", {
                      'done': true
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return PredictionsPage;
    }();

    PredictionsPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }];
    };

    PredictionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-predictions',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./predictions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./predictions.page.scss */
      "./src/app/predictions/predictions.page.scss"))["default"]]
    })], PredictionsPage);
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(storage, router) {
        _classCallCheck(this, LoginService);

        this.storage = storage;
        this.router = router;
      }

      _createClass(LoginService, [{
        key: "check_token",
        value: function check_token() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.storage.get('token');

                  case 2:
                    res = _context3.sent;

                    if (!(res == null)) {
                      _context3.next = 7;
                      break;
                    }

                    this.router.navigate(['login']);
                    _context3.next = 8;
                    break;

                  case 7:
                    return _context3.abrupt("return", true);

                  case 8:
                    ;

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.storage.set('token', null);

                  case 2:
                    this.router.navigate(['login']);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  }
}]);
//# sourceMappingURL=predictions-predictions-module-es5.js.map