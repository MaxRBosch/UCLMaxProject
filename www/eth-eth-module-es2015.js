(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eth-eth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/eth/eth.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eth/eth.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [hidden]=!this.logged_in_wait>\n\n<ion-header [translucent]=\"true\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title style= \"position: absolute; \">Ethereum</ion-title>\n\n    <ion-buttons slot=\"start\" display=\"inline-block\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"block\"  color=\"tertiary\" shape=\"round\" (click)=\"this.login.logout()\">\n        <ion-text style=\"color:white\"> Logout </ion-text>\n        <ion-icon slot=\"icon-only\" name=\"log-out\" style='color:white'  ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card style=\"background-color:#259ACB\"> \n    <ion-card-title style=\"text-align:center; margin-top:10px; color:white\">Current price ($)</ion-card-title>\n    <ion-card-content>\n        \n        <table  style='table-layout:fixed; width: 100%'>\n         \n          <tr>\n            <td><img src=\"assets/icon/eth_png.png\"style=\"height:7vh;width:auto;padding-left:20vw\"></td>\n            <td class='price' [innerHTML]=\"price\"></td>\n          </tr>\n         \n       \n        </table>\n      \n        \n    </ion-card-content>\n  </ion-card>\n  \n  \n  <div *ngIf=\"this.loaded =='init'\">Rendering</div>\n  <ion-card *ngIf= \"this.rendered  =='rendered'\" style=\" background-color:#90D377\">\n    <ion-card-title style=\"text-align:center; margin-top:4px; color:white; font-weight: bold;\">Hourly prices</ion-card-title>\n    \n    \n    <ion-card-content style=\"height:40vh;\">\n      <canvas #lineCanvas></canvas>\n      <div *ngIf=\"this.help =='help'\">Previous predictions are displayed in the graph above. They are displayed in an hourly format (i.e. a prediction for 11:34 is displayed as 11:00).</div>\n    </ion-card-content>\n  </ion-card>\n  \n  \n  <ion-card style=\"background-color:#E56F49\"> \n    <ion-card-title style=\"text-align:center; margin-top:4px; color:white; font-weight: bold;\">Predict with ML</ion-card-title>\n\n    <ion-card-content style='color:white'>\n      <ion-item>\n        <ion-datetime  min={{min_predict_value}} max=\"2023\" [(ngModel)] = \"ibm_prediction_time\" placeholder=\"Select Date and time\"\n          [dayShortNames]=\"customDayShortNames\"\n          displayFormat=\"YYYY-MMM-DD HH:mm\"\n          monthShortNames=\"jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des\"></ion-datetime>\n      </ion-item>\n      <ion-button style=\"--background: #A24E33\" id=\"saving\" expand=\"block\" (click)='predict_ibm()'>\n        Predict!\n    </ion-button>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>  </div>");

/***/ }),

/***/ "./src/app/eth/eth-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/eth/eth-routing.module.ts ***!
  \*******************************************/
/*! exports provided: EthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthPageRoutingModule", function() { return EthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _eth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eth.page */ "./src/app/eth/eth.page.ts");




const routes = [
    {
        path: '',
        component: _eth_page__WEBPACK_IMPORTED_MODULE_3__["EthPage"]
    }
];
let EthPageRoutingModule = class EthPageRoutingModule {
};
EthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EthPageRoutingModule);



/***/ }),

/***/ "./src/app/eth/eth.module.ts":
/*!***********************************!*\
  !*** ./src/app/eth/eth.module.ts ***!
  \***********************************/
/*! exports provided: EthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthPageModule", function() { return EthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _eth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eth-routing.module */ "./src/app/eth/eth-routing.module.ts");
/* harmony import */ var _eth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eth.page */ "./src/app/eth/eth.page.ts");







let EthPageModule = class EthPageModule {
};
EthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eth_routing_module__WEBPACK_IMPORTED_MODULE_5__["EthPageRoutingModule"]
        ],
        declarations: [_eth_page__WEBPACK_IMPORTED_MODULE_6__["EthPage"]]
    })
], EthPageModule);



/***/ }),

/***/ "./src/app/eth/eth.page.scss":
/*!***********************************!*\
  !*** ./src/app/eth/eth.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-toolbar, ion-header {\n  --min-height: 60px;\n}\n\nion-title, ion-toolbar, ion-header {\n  font-size: 120%;\n  color: white;\n}\n\n.price {\n  font-size: 10vw;\n  color: white;\n}\n\n.overview tr td {\n  width: 50%;\n}\n\n.item-datetime {\n  --ripple-color: black;\n}\n\n.datetime-md .datetime-placeholder {\n  color: red;\n}\n\nion-content {\n  --ion-background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXRoL0M6XFxVc2Vyc1xcTWF4IEJvc2NoXFx0aGVzaXMvc3JjXFxhcHBcXGV0aFxcZXRoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZXRoL2V0aC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7QUNFSjs7QURBRztFQUNDLGVBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQ0c7RUFBTyxlQUFBO0VBQ04sWUFBQTtBQ0dKOztBREZJO0VBQWtCLFVBQUE7QUNNdEI7O0FESkk7RUFDQSxxQkFBQTtBQ09KOztBRExJO0VBQXFDLFVBQUE7QUNTekM7O0FEUkk7RUFBYSw2QkFBQTtBQ1lqQiIsImZpbGUiOiJzcmMvYXBwL2V0aC9ldGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcclxuICAgIC0tbWluLWhlaWdodDogNjBweDtcclxuICAgfVxyXG4gICBpb24tdGl0bGUsIGlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICB9XHJcblxyXG4gICBcclxuICAgLnByaWNle2ZvbnQtc2l6ZToxMHZ3O1xyXG4gICAgY29sb3I6d2hpdGU7fVxyXG4gICAgLm92ZXJ2aWV3IHRyIHRkIHsgd2lkdGg6NTAlOyB9XHJcblxyXG4gICAgLml0ZW0tZGF0ZXRpbWUge1xyXG4gICAgLS1yaXBwbGUtY29sb3I6IGJsYWNrO31cclxuXHJcbiAgICAuZGF0ZXRpbWUtbWQgLmRhdGV0aW1lLXBsYWNlaG9sZGVyIHsgY29sb3I6IHJlZDsgfVxyXG4gICAgaW9uLWNvbnRlbnQgey0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO31cclxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xuICAtLW1pbi1oZWlnaHQ6IDYwcHg7XG59XG5cbmlvbi10aXRsZSwgaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xuICBmb250LXNpemU6IDEyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAxMHZ3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5vdmVydmlldyB0ciB0ZCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5pdGVtLWRhdGV0aW1lIHtcbiAgLS1yaXBwbGUtY29sb3I6IGJsYWNrO1xufVxuXG4uZGF0ZXRpbWUtbWQgLmRhdGV0aW1lLXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/eth/eth.page.ts":
/*!*********************************!*\
  !*** ./src/app/eth/eth.page.ts ***!
  \*********************************/
/*! exports provided: EthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthPage", function() { return EthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_predictions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/predictions.service */ "./src/app/services/predictions.service.ts");
/* harmony import */ var _services_minval_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/minval.service */ "./src/app/services/minval.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");










let EthPage = class EthPage {
    constructor(storage, alertCtrl, ibmmodel, valService, login) {
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
    load() {
        return new Promise((resolve) => {
            this.storage.get('predictions_eth').then((predictions) => {
                if (predictions != null) {
                    this.predictions = predictions;
                }
                resolve(true);
            });
        });
    }
    ngOnInit() {
        this.isLoggedin();
        this.min_predict_value = this.valService.min_value();
        this.getprice();
    }
    isLoggedin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.logged_in_wait = yield this.login.check_token();
            return { "login": this.logged_in_wait };
        });
    }
    save(prediction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hist_time = [];
            this.hist_price = [];
            this.pred_price = [];
            this.pred_time = [];
            yield this.storage.set('predictions_eth', this.predictions);
            var userID = yield this.storage.get('token');
            yield this.load();
            if (userID = null) {
                userID = 39;
            }
            yield this.get_hist_price();
            yield this.get_chart();
            let res = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://nodemrbosch2.azurewebsites.net/api/addprediction', { params: { userID: userID, type: 'eth', time: Date.now(), value: prediction } });
            return;
        });
    }
    get_chart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { this.getprice(); }), 60000);
            this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.lineCanvas.nativeElement, {
                type: "line",
                data: {
                    labels: this.hist_time,
                    datasets: [
                        {
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
                            borderWidth: 2,
                            backgroundColor: "red",
                            borderColor: "red",
                            pointBackgroundColor: "red",
                            pointBorderColor: "red",
                            pointHoverBackgroundColor: "red",
                            pointHoverBorderColor: "red",
                            type: 'scatter',
                            datalabels: {
                                color: 'black',
                                align: 'end',
                                display: false
                            }
                        }
                    ]
                }, options: { maintainAspectRatio: false,
                    responsive: true,
                    title: {
                        display: false,
                        text: 'Bitcoin price ($) in 2020'
                    },
                    scales: {
                        xAxes: [{
                                distribution: 'series',
                                display: true,
                                ticks: { fontSize: 10,
                                    maxTicksLimit: 4.1,
                                },
                                scaleLabel: {
                                    display: false,
                                    labelString: "Date",
                                },
                                gridLines: {
                                    borderDash: [8, 4],
                                    color: "#348632",
                                    display: false
                                },
                            }],
                        yAxes: [{
                                ticks: {
                                    min: Math.floor(Math.min((Math.min(...this.hist_price)), (Math.min(Math.min.apply(0, this.pred_price.filter(Boolean))))) / 1000) * 1000 + 1,
                                    max: Math.ceil(Math.max((Math.max(...this.hist_price)), (Math.max(...this.pred_price))) / 1000) * 1000,
                                    maxTicksLimit: ((Math.ceil(Math.max((Math.max(...this.hist_price)), (Math.max(...this.pred_price))) / 1000)) - (Math.floor(Math.min((Math.min(...this.hist_price)), (Math.min(Math.min.apply(0, this.pred_price.filter(Boolean))))) / 1000))) + 2,
                                },
                                gridLines: {
                                    borderDash: [8, 4],
                                    color: "#348632",
                                    display: false
                                },
                            }]
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: { boxWidth: 10,
                            usePointStyle: true }
                    }
                }
            });
        });
    }
    // async ionViewWillEnter (){
    // }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.isLoggedin();
            yield this.load();
            yield this.get_hist_price();
            yield this.get_chart();
            return { 'done': true };
        });
    }
    get_hist_price() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var url = "https://api.binance.com/api/v1/klines?symbol=ETHUSDT&interval=1h";
            const res = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);
            var i;
            var options = {
                hour12: false, hour: 'numeric', day: 'numeric', month: 'numeric',
            };
            for (i = 0; i < res.data.length; i++) {
                this.hist_time.push(new Date(res.data[i][0]).toLocaleDateString('nl', options));
                this.hist_price.push(Math.floor(res.data[i][1]));
                this.pred_price.push(0);
                // this.pred_time.push(new Date(res.data[i][0]).toLocaleDateString('en', options))
            }
            var j;
            for (j = 0; j < this.predictions.length; j++) {
                if (this.hist_time.includes(this.predictions[j].day_month)) {
                    this.pred_price[(this.hist_time.indexOf(this.predictions[j].day_month))] = this.predictions[j].price;
                }
            }
            return { 'length': this.pred_price.length };
        });
    }
    getprice() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.min_predict_value = this.valService.min_value();
            try {
                var url = "https://api.binance.com/api/v1/klines?symbol=ETHUSDT&interval=1m";
                const res = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);
                if (res.data.length != 0) {
                    this.loaded = 'yes';
                }
                else {
                    this.loaded = 'no';
                }
                this.price = Math.floor(res.data[res.data.length - 1][1]);
                return { 'price_eth': this.price };
            }
            catch (_a) {
                this.loaded = 'no';
                return;
            }
        });
    }
    predict_ibm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var year = parseInt(this.ibm_prediction_time.substr(0, 4));
            }
            catch (_a) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Please select a date and time for your prediction');
                return { 'val': [0, 0, 0] };
            }
            // Paste your Watson Machine Learning service apikey here
            // Use this code as written to get an access token from IBM Cloud REST API
            //
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Please hold on while we are getting your prediction');
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading();
            const res = yield (yield this.ibmmodel.predict_api(this.ibm_prediction_time, 'eth')).prediction_ibm;
            var array_values = yield (yield this.ibmmodel.predict_api(this.ibm_prediction_time, 'eth')).time;
            if (res != null) {
                yield this.show_prediction(res, array_values);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    icon: 'error',
                    title: 'The model is currently down',
                    text: 'We have logged your error and will resolve it as soon as possible'
                });
            }
            return { 'val': [0, 0, 0] };
        });
    }
    show_prediction(prediction, array_values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var mins = array_values[4];
            mins >= 10 ? mins = String(mins) : mins = '0' + String(mins);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'You predicted 1 ethereum to be ' + parseInt(prediction).toString() + ' dollars in ' + String(array_values[2]) + "-" + String(array_values[1]) + "-" + String(array_values[0]) + " at " + String(array_values[3]) + ":" + mins,
                text: 'Do you want to save this prediction?',
                imageUrl: "../../assets/img/ML.png",
                imageWidth: 288,
                imageHeight: 162,
                showCloseButton: false,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Save',
                cancelButtonText: 'Cancel',
            }).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.value) {
                    var hour = String(((array_values[3]) >= 10) ? array_values[3] : '0' + (array_values[3]));
                    var time = new Date().getTime();
                    this.predictions.push({
                        price: parseInt(prediction),
                        day_month: String(array_values[2]) + "-" + String(array_values[1]) + " " + hour,
                        timestamp: time,
                        type: "Eth"
                    });
                    yield this.save(prediction);
                }
            }));
            return { 'val': array_values };
        });
    }
};
EthPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_predictions_service__WEBPACK_IMPORTED_MODULE_7__["PredictionsService"] },
    { type: _services_minval_service__WEBPACK_IMPORTED_MODULE_8__["MinvalService"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("lineCanvas")
], EthPage.prototype, "lineCanvas", void 0);
EthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./eth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/eth/eth.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./eth.page.scss */ "./src/app/eth/eth.page.scss")).default]
    })
], EthPage);



/***/ })

}]);
//# sourceMappingURL=eth-eth-module-es2015.js.map