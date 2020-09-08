function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["btc-btc-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/btc/btc.page.html":
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/btc/btc.page.html ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBtcBtcPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <div [hidden]=!this.logged_in_wait>\n<ion-header [translucent]=\"true\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title style= \"position: absolute; \">Bitcoin</ion-title>\n    <ion-buttons slot=\"start\" display=\"inline-block\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"block\"  color=\"tertiary\" shape=\"round\" (click)=\"this.login.logout()\">\n        <ion-text style=\"color:white\"> Logout </ion-text>\n        <ion-icon slot=\"icon-only\" name=\"log-out\" style='color:white'  ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-card style=\"background-color:#259ACB\"> \n    <ion-card-title style=\"text-align:center; margin-top:10px; color:white\">Current price ($)</ion-card-title>\n    <ion-card-content>\n        <table  style='table-layout:fixed; width: 100%'>   \n          <tr>\n            <td><img src=\"assets/icon/btc_png.png\"style=\"height:7vh;width:auto;padding-left:20vw\"></td>\n            <td class='price' [innerHTML]=\"price\"></td>\n          </tr>\n        </table>\n    </ion-card-content>\n  </ion-card>\n  <div *ngIf=\"this.loaded =='init'\">Rendering</div>\n  <ion-card *ngIf= \"this.rendered  =='rendered'\" style=\" background-color:#90D377\">\n    <ion-card-title style=\"text-align:center; margin-top:4px; color:white; font-weight: bold;\">Hourly prices</ion-card-title> \n    <ion-card-content style=\"height:40vh;\">\n      <canvas #lineCanvas></canvas>\n      <div *ngIf=\"this.help =='help'\">Previous predictions are displayed in the graph above. They are displayed in an hourly format (i.e. a prediction for 11:34 is displayed as 11:00).</div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style=\"background-color:#E56F49\"> \n    <ion-card-title style=\"text-align:center; margin-top:4px; color:white; font-weight: bold;\">Predict with ML</ion-card-title>\n    <ion-card-content style='color:white'>\n      <ion-item>\n        <ion-datetime  min={{min_predict_value}} max=\"2023\" [(ngModel)] = \"ibm_prediction_time\" placeholder=\"Select Date and time\"\n          [dayShortNames]=\"customDayShortNames\"\n          displayFormat=\"YYYY-MMM-DD HH:mm\"\n          monthShortNames=\"jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des\"></ion-datetime>\n      </ion-item>\n      <ion-button style=\"--background: #A24E33\" id=\"saving\" expand=\"block\" (click)='predict_ibm()'>\n        Predict!\n    </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>  </div>  ";
    /***/
  },

  /***/
  "./src/app/btc/btc-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/btc/btc-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: BtcPageRoutingModule */

  /***/
  function srcAppBtcBtcRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BtcPageRoutingModule", function () {
      return BtcPageRoutingModule;
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


    var _btc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./btc.page */
    "./src/app/btc/btc.page.ts");

    var routes = [{
      path: '',
      component: _btc_page__WEBPACK_IMPORTED_MODULE_3__["BtcPage"]
    }];

    var BtcPageRoutingModule = function BtcPageRoutingModule() {
      _classCallCheck(this, BtcPageRoutingModule);
    };

    BtcPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BtcPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/btc/btc.module.ts":
  /*!***********************************!*\
    !*** ./src/app/btc/btc.module.ts ***!
    \***********************************/

  /*! exports provided: BtcPageModule */

  /***/
  function srcAppBtcBtcModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BtcPageModule", function () {
      return BtcPageModule;
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


    var _btc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./btc-routing.module */
    "./src/app/btc/btc-routing.module.ts");
    /* harmony import */


    var _btc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./btc.page */
    "./src/app/btc/btc.page.ts");

    var BtcPageModule = function BtcPageModule() {
      _classCallCheck(this, BtcPageModule);
    };

    BtcPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _btc_routing_module__WEBPACK_IMPORTED_MODULE_5__["BtcPageRoutingModule"]],
      declarations: [_btc_page__WEBPACK_IMPORTED_MODULE_6__["BtcPage"]]
    })], BtcPageModule);
    /***/
  },

  /***/
  "./src/app/btc/btc.page.scss":
  /*!***********************************!*\
    !*** ./src/app/btc/btc.page.scss ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppBtcBtcPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-toolbar, ion-header {\n  --min-height: 60px;\n}\n\nion-title, ion-toolbar, ion-header {\n  font-size: 120%;\n  color: white;\n}\n\nion-content {\n  --ion-background-color: black;\n}\n\n.price {\n  font-size: 10vw;\n  color: white;\n}\n\n.overview tr td {\n  width: 50%;\n}\n\n.item-datetime {\n  --ripple-color: black;\n}\n\n.datetime-md .datetime-placeholder {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnRjL0M6XFxVc2Vyc1xcTWF4IEJvc2NoXFx0aGVzaXMvc3JjXFxhcHBcXGJ0Y1xcYnRjLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnRjL2J0Yy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7QUNFSjs7QURBRztFQUNDLGVBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQUc7RUFBYSw2QkFBQTtBQ0loQjs7QURGRztFQUFPLGVBQUE7RUFDTixZQUFBO0FDTUo7O0FETEk7RUFBa0IsVUFBQTtBQ1N0Qjs7QURQSTtFQUNBLHFCQUFBO0FDVUo7O0FEUkk7RUFBcUMsVUFBQTtBQ1l6QyIsImZpbGUiOiJzcmMvYXBwL2J0Yy9idGMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcclxuICAgIC0tbWluLWhlaWdodDogNjBweDtcclxuICAgfVxyXG4gICBpb24tdGl0bGUsIGlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICB9XHJcbiAgIFxyXG4gICBpb24tY29udGVudCB7LS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7fVxyXG5cclxuICAgLnByaWNle2ZvbnQtc2l6ZToxMHZ3O1xyXG4gICAgY29sb3I6d2hpdGU7fVxyXG4gICAgLm92ZXJ2aWV3IHRyIHRkIHsgd2lkdGg6NTAlOyB9XHJcblxyXG4gICAgLml0ZW0tZGF0ZXRpbWUge1xyXG4gICAgLS1yaXBwbGUtY29sb3I6IGJsYWNrO31cclxuXHJcbiAgICAuZGF0ZXRpbWUtbWQgLmRhdGV0aW1lLXBsYWNlaG9sZGVyIHsgY29sb3I6IHJlZDsgfSIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcbiAgLS1taW4taGVpZ2h0OiA2MHB4O1xufVxuXG5pb24tdGl0bGUsIGlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcbiAgZm9udC1zaXplOiAxMjAlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTB2dztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ub3ZlcnZpZXcgdHIgdGQge1xuICB3aWR0aDogNTAlO1xufVxuXG4uaXRlbS1kYXRldGltZSB7XG4gIC0tcmlwcGxlLWNvbG9yOiBibGFjaztcbn1cblxuLmRhdGV0aW1lLW1kIC5kYXRldGltZS1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/btc/btc.page.ts":
  /*!*********************************!*\
    !*** ./src/app/btc/btc.page.ts ***!
    \*********************************/

  /*! exports provided: BtcPage */

  /***/
  function srcAppBtcBtcPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BtcPage", function () {
      return BtcPage;
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


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! axios */
    "./node_modules/axios/index.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _services_predictions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/predictions.service */
    "./src/app/services/predictions.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_minval_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/minval.service */
    "./src/app/services/minval.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts"); //  these imports are done to get rid of the TS warning -ts-file-is-part-of-the-typescript-compilation-but


    var BtcPage = /*#__PURE__*/function () {
      function BtcPage(storage, alertCtrl, ibmmodel, valService, login) {
        _classCallCheck(this, BtcPage);

        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.ibmmodel = ibmmodel;
        this.valService = valService;
        this.login = login;
        this.loaded = 'init';
        this.predictions = [];
        this.rendered = 'rendered';
        this.hist_time = [];
        this.hist_price = [];
        this.pred_price = [];
        this.pred_time = [];
      }

      _createClass(BtcPage, [{
        key: "load",
        value: function load() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.storage.get('predictions_btc').then(function (predictions) {
              if (predictions != null) {
                _this.predictions = predictions;
              }

              resolve(true);
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedin();
          this.min_predict_value = this.valService.min_value();
          this.getprice();
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
        key: "save",
        value: function save(prediction) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var userID, res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.hist_time = [];
                    this.hist_price = [];
                    this.pred_price = [];
                    this.pred_time = [];
                    _context2.next = 6;
                    return this.storage.set('predictions_btc', this.predictions);

                  case 6:
                    _context2.next = 8;
                    return this.storage.get('token');

                  case 8:
                    userID = _context2.sent;
                    _context2.next = 11;
                    return this.load();

                  case 11:
                    _context2.next = 13;
                    return this.get_hist_price();

                  case 13:
                    _context2.next = 15;
                    return this.get_chart();

                  case 15:
                    if (userID = null) {
                      userID = 39;
                    }

                    _context2.next = 18;
                    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://nodemrbosch.azurewebsites.net/api/addprediction', {
                      params: {
                        userID: userID,
                        type: 'btc',
                        time: Date.now(),
                        value: prediction
                      }
                    });

                  case 18:
                    res = _context2.sent;

                  case 19:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "get_chart",
        value: function get_chart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    setInterval(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return this.getprice();

                              case 2:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }, 60000);
                    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.lineCanvas.nativeElement, {
                      type: "line",
                      data: {
                        labels: this.hist_time,
                        datasets: [{
                          fill: true,
                          label: "Actual price",
                          lineTension: 0.3,
                          backgroundColor: "rgb(5, 156, 45, 0.6)",
                          borderColor: "rgba(220, 220, 220, 1)",
                          borderCapStyle: "butt",
                          borderDash: [],
                          borderDashOffset: 0.0,
                          borderJoinStyle: "miter",
                          pointBorderColor: "rgba(220, 220, 220, 0.5)",
                          pointBackgroundColor: "rgba(220,220,220,1)",
                          pointBorderWidth: 1,
                          pointHoverRadius: 1,
                          pointHoverBackgroundColor: "rgba(220,220,220,1)",
                          pointHoverBorderColor: "rgba(220,220,220,1)",
                          pointHoverBorderWidth: 2,
                          pointRadius: 1,
                          pointHitRadius: 10,
                          data: this.hist_price,
                          spanGaps: false,
                          datalabels: {
                            color: 'black',
                            align: 'end',
                            display: false
                          }
                        }, {
                          label: "Prediction",
                          data: this.pred_price,
                          borderWidth: 0.4,
                          pointRadius: 5,
                          backgroundColor: "purple",
                          borderColor: "purple",
                          pointBackgroundColor: "purple",
                          pointBorderColor: "white",
                          pointHoverBackgroundColor: "purple",
                          pointHoverBorderColor: "purple",
                          type: 'scatter',
                          datalabels: {
                            color: 'black',
                            align: 'left',
                            display: 'auto'
                          }
                        }]
                      },
                      options: {
                        maintainAspectRatio: false,
                        responsive: true,
                        title: {
                          display: false,
                          text: 'Bitcoin price ($) in 2020'
                        },
                        scales: {
                          xAxes: [{
                            distribution: 'series',
                            display: true,
                            ticks: {
                              fontSize: 10,
                              maxTicksLimit: 4.1
                            },
                            scaleLabel: {
                              display: false,
                              labelString: "Date"
                            },
                            gridLines: {
                              borderDash: [8, 4],
                              color: "#348632",
                              display: false
                            }
                          }],
                          yAxes: [{
                            ticks: {
                              min: Math.floor(Math.min(Math.min.apply(Math, _toConsumableArray(this.hist_price)), Math.min(Math.min.apply(0, this.pred_price.filter(Boolean)))) / 1000) * 1000,
                              max: Math.ceil(Math.max(Math.max.apply(Math, _toConsumableArray(this.hist_price)), Math.max.apply(Math, _toConsumableArray(this.pred_price))) / 1000) * 1000,
                              maxTicksLimit: Math.ceil(Math.max(Math.max.apply(Math, _toConsumableArray(this.hist_price)), Math.max.apply(Math, _toConsumableArray(this.pred_price))) / 1000) - Math.floor(Math.min(Math.min.apply(Math, _toConsumableArray(this.hist_price)), Math.min(Math.min.apply(0, this.pred_price.filter(Boolean)))) / 1000) + 2
                            },
                            gridLines: {
                              borderDash: [8, 4],
                              color: "#348632",
                              display: false
                            }
                          }]
                        },
                        legend: {
                          display: true,
                          position: 'bottom',
                          labels: {
                            boxWidth: 10,
                            usePointStyle: true
                          }
                        }
                      }
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // async ionViewWillEnter (){
        // }

      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.isLoggedin();

                  case 2:
                    _context5.next = 4;
                    return this.load();

                  case 4:
                    _context5.next = 6;
                    return this.get_hist_price();

                  case 6:
                    _context5.next = 8;
                    return this.get_chart();

                  case 8:
                    return _context5.abrupt("return", {
                      'done': true
                    });

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "get_hist_price",
        value: function get_hist_price() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var url, res, i, options, j;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    url = "https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1h";
                    _context6.next = 3;
                    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);

                  case 3:
                    res = _context6.sent;
                    options = {
                      hour12: false,
                      hour: 'numeric',
                      day: 'numeric',
                      month: 'numeric'
                    };

                    for (i = 0; i < res.data.length; i++) {
                      this.hist_time.push(new Date(res.data[i][0]).toLocaleDateString('nl', options));
                      this.hist_price.push(Math.floor(res.data[i][1]));
                      this.pred_price.push(0); // this.pred_time.push(new Date(res.data[i][0]).toLocaleDateString('en', options))
                    }

                    for (j = 0; j < this.predictions.length; j++) {
                      if (this.hist_time.includes(this.predictions[j].day_month)) {
                        this.pred_price[this.hist_time.indexOf(this.predictions[j].day_month)] = this.predictions[j].price;
                      }
                    }

                    return _context6.abrupt("return", {
                      'length': this.pred_price.length
                    });

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "predict_ibm",
        value: function predict_ibm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var year, res, array_values;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    year = parseInt(this.ibm_prediction_time.substr(0, 4));
                    _context7.next = 8;
                    break;

                  case 4:
                    _context7.prev = 4;
                    _context7.t0 = _context7["catch"](0);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Please select a date and time for your prediction');
                    return _context7.abrupt("return", {
                      'val': [0, 0, 0]
                    });

                  case 8:
                    // Paste your Watson Machine Learning service apikey here
                    // Use this code as written to get an access token from IBM Cloud REST API
                    //
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Please hold on while we are getting your prediction');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
                    _context7.next = 12;
                    return this.ibmmodel.predict_api(this.ibm_prediction_time, 'btc');

                  case 12:
                    _context7.next = 14;
                    return _context7.sent.prediction_ibm;

                  case 14:
                    res = _context7.sent;
                    _context7.next = 17;
                    return this.ibmmodel.predict_api(this.ibm_prediction_time, 'btc');

                  case 17:
                    _context7.next = 19;
                    return _context7.sent.time;

                  case 19:
                    array_values = _context7.sent;

                    if (!(res != null)) {
                      _context7.next = 25;
                      break;
                    }

                    _context7.next = 23;
                    return this.show_prediction(res, array_values);

                  case 23:
                    _context7.next = 26;
                    break;

                  case 25:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                      icon: 'error',
                      title: 'The model is currently down',
                      text: 'We have logged your error and will resolve it as soon as possible'
                    });

                  case 26:
                    return _context7.abrupt("return", {
                      'val': [0, 0, 0]
                    });

                  case 27:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[0, 4]]);
          }));
        }
      }, {
        key: "show_prediction",
        value: function show_prediction(prediction, array_values) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this3 = this;

            var mins;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    mins = array_values[4];
                    mins >= 10 ? mins = String(mins) : mins = '0' + String(mins);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                      title: 'You predicted 1 bitcoin to be ' + parseInt(prediction).toString() + ' dollars in ' + String(array_values[2]) + "-" + String(array_values[1]) + "-" + String(array_values[0]) + " at " + String(array_values[3]) + ":" + mins,
                      text: 'Do you want to save this prediction?',
                      imageUrl: "../../assets/img/ML.png",
                      imageWidth: 288,
                      imageHeight: 162,
                      showCloseButton: false,
                      showCancelButton: true,
                      focusConfirm: false,
                      confirmButtonText: 'Save',
                      cancelButtonText: 'Cancel'
                    }).then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                        var options, now, hour, time;
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                if (!result.value) {
                                  _context8.next = 9;
                                  break;
                                }

                                options = {
                                  hour12: false,
                                  hour: 'numeric',
                                  day: 'numeric',
                                  month: 'numeric'
                                };
                                now = new Date().toLocaleDateString('nl', options);
                                hour = String(array_values[3] >= 10 ? array_values[3] : '0' + array_values[3]);
                                time = new Date().getTime();
                                this.predictions.push({
                                  price: parseInt(prediction),
                                  day_month: String(array_values[2]) + "-" + String(array_values[1]) + " " + hour,
                                  timestamp: time,
                                  type: "Btc"
                                });
                                _context8.next = 8;
                                return this.save(prediction);

                              case 8:
                                return _context8.abrupt("return", {
                                  'val': array_values
                                });

                              case 9:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    });
                    return _context9.abrupt("return", {
                      'val': array_values
                    });

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
        }
      }, {
        key: "getprice",
        value: function getprice() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var url, res;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.min_predict_value = this.valService.min_value();
                    _context10.prev = 1;
                    url = "https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m";
                    _context10.next = 5;
                    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);

                  case 5:
                    res = _context10.sent;

                    if (res.data.length != 0) {
                      this.loaded = 'yes';
                    } else {
                      this.loaded = 'no';
                    } // this.time = new Date(res.data[res.data.length-1][0]).toLocaleString()


                    this.price = Math.floor(res.data[res.data.length - 1][1]);
                    return _context10.abrupt("return", {
                      "price_btc": this.price
                    });

                  case 11:
                    _context10.prev = 11;
                    _context10.t0 = _context10["catch"](1);
                    this.loaded = 'no';
                    return _context10.abrupt("return");

                  case 15:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[1, 11]]);
          }));
        }
      }]);

      return BtcPage;
    }();

    BtcPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }, {
        type: _services_predictions_service__WEBPACK_IMPORTED_MODULE_6__["PredictionsService"]
      }, {
        type: _services_minval_service__WEBPACK_IMPORTED_MODULE_8__["MinvalService"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("lineCanvas")], BtcPage.prototype, "lineCanvas", void 0);
    BtcPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-btc',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./btc.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/btc/btc.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./btc.page.scss */
      "./src/app/btc/btc.page.scss"))["default"]]
    })], BtcPage);
    /***/
  }
}]);
//# sourceMappingURL=btc-btc-module-es5.js.map