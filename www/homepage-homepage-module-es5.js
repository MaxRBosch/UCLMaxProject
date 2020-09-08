function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-homepage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomepageHomepagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header [translucent]=\"true\">\n  \n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" display=\"inline-block\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"block\"  color=\"tertiary\" shape=\"round\" (click)=\"this.login.logout()\">\n        <ion-text style=\"color:white\"> Logout </ion-text>\n        <ion-icon slot=\"icon-only\" name=\"log-out\" style='color:white'  ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style= \"position: absolute; \">{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n\n    <ion-row>\n   \n    </ion-row>\n  <ion-row>\n </ion-row>\n  <ion-row>\n    \n    <ion-card style=\"background-color:#259ACB; height:22%; \"> \n      <ion-card-title style=\"text-align:center; margin-top:10px; color:white\">Current price ($)</ion-card-title>\n      <ion-card-content>\n  \n        <div [hidden]=!this.logged_in_wait>\n\n          <table  style='table-layout:fixed; width: 100%'>\n           \n            <tr>\n              <td><img src=\"assets/icon/btc_png.png\"style=\"height:7vh;width:auto;padding-left:20vw\"></td>\n              <td class='price' [innerHTML]=\"this.glob_price_btc\"></td>\n            </tr>\n            <tr>\n              <td><img src=\"assets/icon/eth_png.png\"style=\"height:7vh;width:auto; ;padding-left:20vw\"></td>\n              <td class='price' [innerHTML]=\"this.glob_price_eth\"></td>\n            </tr>\n         \n          </table>\n        </div>\n          \n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n  \n  <ion-row>\n    <ion-card style=\"background-color:#90D377; width: 100%;\"> \n      <ion-card-title style=\"text-align:center; margin-top:4px; color:white\">{{this.display_graph}}</ion-card-title>\n      <ion-card-content>\n        \n        <canvas #lineCanvas></canvas>\n      </ion-card-content><ion-item class=\"item-background-color\" >\n <img style=\"margin-left: 11vw; height:6vh; width:auto\" (click)=\"get_chart(this.bitcoin,'Bitcoin')\"src=\"assets/icon/btc_png.png\">\n      <img style=\"margin-left: 11vw; height:6vh; width:auto\"(click)=\"get_chart(this.ethereum,'Ethereum')\"src=\"assets/icon/eth_png.png\">\n      <img style=\"margin-left: 11vw; height:6vh; width:auto\"(click)=\"get_chart(this.dollars,'Dollars')\"src=\"assets/icon/dollar_png.png\">\n    </ion-item>\n    </ion-card>\n  </ion-row>\n  <ion-row>\n\n    <ion-card style=\"background-color:#E56F49; width:100%\">\n      <ion-card-title style=\"text-align:center; margin-top:4px; color:white\">Current Portofolio</ion-card-title>\n    <ion-card-content style=\"margin-top: -5vh;\" >\n      <div [hidden]=!this.logged_in_wait>\n\n      <div class='tbl'>\n        <table style='table-layout:fixed; width: 100%'>\n          \n          <tr>\n            <td>Bitcoin</td>\n            <td >{{this.bitcoin_display}}</td>\n          </tr>\n          <tr>\n            <td>Ethereum</td>\n            <td>{{this.ethereum_display}}</td>\n          </tr>\n          <tr>\n            <td>Dollars</td>\n            <td>{{this.dollars_display}}</td>\n          </tr>\n          \n        </table>\n      </div>\n\n      </div>\n    </ion-card-content>\n  </ion-card>\n  </ion-row>\n  <div [hidden]=!this.logged_in_wait>\n\n  <ion-row>\n\n    <ion-col size = \"6\"><div class='secondary'>\n    <ion-button (click)='buy()' >BUY</ion-button> </div> </ion-col>\n    \n      <ion-col size = \"6\"><div class='secondary'>\n    <ion-button (click)='sell()'>SELL</ion-button></div> </ion-col>\n  </ion-row>\n  \n</div>\n</ion-grid>\n </ion-content>\n \n";
    /***/
  },

  /***/
  "./src/app/homepage/homepage-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/homepage/homepage-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: HomepagePageRoutingModule */

  /***/
  function srcAppHomepageHomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePageRoutingModule", function () {
      return HomepagePageRoutingModule;
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


    var _homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homepage.page */
    "./src/app/homepage/homepage.page.ts");

    var routes = [{
      path: '',
      component: _homepage_page__WEBPACK_IMPORTED_MODULE_3__["HomepagePage"]
    }];

    var HomepagePageRoutingModule = function HomepagePageRoutingModule() {
      _classCallCheck(this, HomepagePageRoutingModule);
    };

    HomepagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomepagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/homepage/homepage.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/homepage/homepage.module.ts ***!
    \*********************************************/

  /*! exports provided: HomepagePageModule */

  /***/
  function srcAppHomepageHomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePageModule", function () {
      return HomepagePageModule;
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


    var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./homepage-routing.module */
    "./src/app/homepage/homepage-routing.module.ts");
    /* harmony import */


    var _homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./homepage.page */
    "./src/app/homepage/homepage.page.ts");

    var HomepagePageModule = function HomepagePageModule() {
      _classCallCheck(this, HomepagePageModule);
    };

    HomepagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomepagePageRoutingModule"]],
      declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_6__["HomepagePage"]]
    })], HomepagePageModule);
    /***/
  },

  /***/
  "./src/app/homepage/homepage.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/homepage/homepage.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomepageHomepagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_title h1 {\n  color: #ff9300;\n  font-family: \"Book Antiqua\";\n}\n\n.main_title {\n  align-content: center;\n  font-weight: bold;\n}\n\n.intro_text {\n  font-size: large;\n  font-family: \"Sans Serif\";\n}\n\n.gridd {\n  grid-template-columns: repeat(10, 1fr);\n  grid-auto-rows: auto;\n  grid-template-areas: \" x x x x x x x x x x\" \" x x i i i i i i x x \" \" x x i i i i i i x x \" \" x x x x x x x x x x \" \" x t t t t t t t t x \" \" x t t t t t t t t x \" \" b b b b x x s s s s \" \" x p p p x c c x e e\";\n}\n\n.logo {\n  padding-left: 2vw;\n  padding-right: 2vw;\n  margin-top: 2vh;\n  margin-bottom: 2vh;\n}\n\n.tbl {\n  border: 1px solid white;\n  margin-top: 6vh;\n  background-color: #A24E33;\n}\n\n.tbl td {\n  text-align: center;\n  vertical-align: middle;\n  height: 30px;\n  color: white;\n  font-weight: bold;\n}\n\n.price {\n  font-size: 10vw;\n  color: white;\n}\n\n.overview tr td {\n  width: 50%;\n}\n\n.main ion-button {\n  --background:#3483eb;\n  font-family: \"Book Antiqua\";\n  text-transform: none;\n  font-size: 20px;\n  width: 60vw;\n  height: 10vh;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 6vh;\n}\n\n.secondary ion-button {\n  font-family: \"Book Antiqua\";\n  text-transform: none;\n  --background:#E56F49;\n  width: 40vw;\n  margin-left: 3vw;\n  margin-right: 5vw;\n  margin-top: 0px;\n  font-weight: bold;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-toolbar, ion-header {\n  --min-height: 60px;\n}\n\nion-title, ion-toolbar, ion-header {\n  font-size: 120%;\n  color: white;\n  font-weight: bold;\n}\n\nion-card-title, ion-card {\n  font-weight: bold;\n}\n\nion-content {\n  --ion-background-color:black;\n}\n\n.item-inner {\n  --background: red !important;\n}\n\n.item-background-color {\n  --ion-item-background:#015f01d5;\n  --ion-item-color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvQzpcXFVzZXJzXFxNYXggQm9zY2hcXHRoZXNpcy9zcmNcXGFwcFxcaG9tZXBhZ2VcXGhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNGLDJCQUFBO0FDQUE7O0FER0E7RUFDRSxxQkFBQTtFQUNGLGlCQUFBO0FDQUE7O0FER0E7RUFDRSxnQkFBQTtFQUNGLHlCQUFBO0FDQUE7O0FEQ0E7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa05BQ0E7QUNDQTs7QURRQTtFQUFNLGlCQUFBO0VBQ04sa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKQTs7QURLQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDRkE7O0FES0E7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZBOztBREtBO0VBQU8sZUFBQTtFQUNQLFlBQUE7QUNEQTs7QURFQTtFQUFrQixVQUFBO0FDRWxCOztBRERBO0VBQ0Esb0JBQUE7RUFDRSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNGLGVBQUE7QUNJQTs7QURIQTtFQUNFLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0YsZUFBQTtFQUNBLGlCQUFBO0FDTUE7O0FESEE7RUFDQSwrQkFBQTtBQ01BOztBREpBO0VBQ0Esa0JBQUE7QUNPQTs7QURMQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNRQTs7QURMQTtFQUEwQixpQkFBQTtBQ1MxQjs7QUROQTtFQUNFLDRCQUFBO0FDU0Y7O0FETkE7RUFDRSw0QkFBQTtBQ1NGOztBRE5BO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYWluX3RpdGxlIGgxIHtcclxuICBjb2xvcjogI2ZmOTMwMDtcclxuZm9udC1mYW1pbHk6XCJCb29rIEFudGlxdWFcIn1cclxuXHJcbiBcclxuLm1haW5fdGl0bGV7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5mb250LXdlaWdodDpib2xkO31cclxuXHJcblxyXG4uaW50cm9fdGV4dCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuZm9udC1mYW1pbHk6IFwiU2FucyBTZXJpZlwifVxyXG4uZ3JpZGR7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMTAsMWZyKTtcclxuZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbmdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcblwiIHggeCB4IHggeCB4IHggeCB4IHhcIlxyXG5cIiB4IHggaSBpIGkgaSBpIGkgeCB4IFwiXHJcblwiIHggeCBpIGkgaSBpIGkgaSB4IHggXCJcclxuXCIgeCB4IHggeCB4IHggeCB4IHggeCBcIlxyXG5cIiB4IHQgdCB0IHQgdCB0IHQgdCB4IFwiXHJcblwiIHggdCB0IHQgdCB0IHQgdCB0IHggXCJcclxuXCIgYiBiIGIgYiB4IHggcyBzIHMgcyBcIlxyXG5cIiB4IHAgcCBwIHggYyBjIHggZSBlXCJ9XHJcblxyXG4ubG9nb3twYWRkaW5nLWxlZnQ6IDJ2dztcclxucGFkZGluZy1yaWdodDogMnZ3O1xyXG5tYXJnaW4tdG9wOjJ2aDtcclxubWFyZ2luLWJvdHRvbToydmg7fVxyXG4udGJsIHtcclxuYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbm1hcmdpbi10b3A6NnZoO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNBMjRFMzNcclxuXHJcbn1cclxuLnRibCB0ZHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5oZWlnaHQ6MzBweDtcclxuY29sb3I6d2hpdGU7XHJcbmZvbnQtd2VpZ2h0OmJvbGQ7XHJcblxyXG59XHJcbi5wcmljZXtmb250LXNpemU6MTB2dztcclxuY29sb3I6d2hpdGU7fVxyXG4ub3ZlcnZpZXcgdHIgdGQgeyB3aWR0aDo1MCU7IH1cclxuLm1haW4gaW9uLWJ1dHRvbntcclxuLS1iYWNrZ3JvdW5kOiMzNDgzZWI7XHJcbiAgZm9udC1mYW1pbHk6XCJCb29rIEFudGlxdWFcIjtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgaGVpZ2h0OjEwdmg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5tYXJnaW4tdG9wOjZ2aDt9XHJcbi5zZWNvbmRhcnkgaW9uLWJ1dHRvbntcclxuICBmb250LWZhbWlseTpcIkJvb2sgQW50aXF1YVwiO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDojRTU2RjQ5O1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAzdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1dnc7XHJcbm1hcmdpbi10b3A6MHB4O1xyXG5mb250LXdlaWdodDpib2xkO1xyXG5cclxufVxyXG5pb24tbWVudS1idXR0b24ge1xyXG5jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbmlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcclxuLS1taW4taGVpZ2h0OiA2MHB4O1xyXG59XHJcbmlvbi10aXRsZSwgaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xyXG5mb250LXNpemU6IDEyMCU7XHJcbmNvbG9yOndoaXRlO1xyXG5mb250LXdlaWdodDpib2xkO1xyXG5cclxufVxyXG5pb24tY2FyZC10aXRsZSwgaW9uLWNhcmQge2ZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi5pdGVtLWlubmVyIHtcclxuICAtLWJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojMDE1ZjAxZDU7XHJcbiAgLS1pb24taXRlbS1jb2xvcjp3aGl0ZTtcclxufSIsIi5tYWluX3RpdGxlIGgxIHtcbiAgY29sb3I6ICNmZjkzMDA7XG4gIGZvbnQtZmFtaWx5OiBcIkJvb2sgQW50aXF1YVwiO1xufVxuXG4ubWFpbl90aXRsZSB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnRyb190ZXh0IHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC1mYW1pbHk6IFwiU2FucyBTZXJpZlwiO1xufVxuXG4uZ3JpZGQge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIHggeCB4IHggeCB4IHggeCB4IHhcIiBcIiB4IHggaSBpIGkgaSBpIGkgeCB4IFwiIFwiIHggeCBpIGkgaSBpIGkgaSB4IHggXCIgXCIgeCB4IHggeCB4IHggeCB4IHggeCBcIiBcIiB4IHQgdCB0IHQgdCB0IHQgdCB4IFwiIFwiIHggdCB0IHQgdCB0IHQgdCB0IHggXCIgXCIgYiBiIGIgYiB4IHggcyBzIHMgcyBcIiBcIiB4IHAgcCBwIHggYyBjIHggZSBlXCI7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZy1sZWZ0OiAydnc7XG4gIHBhZGRpbmctcmlnaHQ6IDJ2dztcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi50Ymwge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTI0RTMzO1xufVxuXG4udGJsIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTB2dztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ub3ZlcnZpZXcgdHIgdGQge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubWFpbiBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiMzNDgzZWI7XG4gIGZvbnQtZmFtaWx5OiBcIkJvb2sgQW50aXF1YVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiAxMHZoO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA2dmg7XG59XG5cbi5zZWNvbmRhcnkgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkJvb2sgQW50aXF1YVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiNFNTZGNDk7XG4gIHdpZHRoOiA0MHZ3O1xuICBtYXJnaW4tbGVmdDogM3Z3O1xuICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xuICAtLW1pbi1oZWlnaHQ6IDYwcHg7XG59XG5cbmlvbi10aXRsZSwgaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xuICBmb250LXNpemU6IDEyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6YmxhY2s7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tYmFja2dyb3VuZC1jb2xvciB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojMDE1ZjAxZDU7XG4gIC0taW9uLWl0ZW0tY29sb3I6d2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/homepage/homepage.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/homepage/homepage.page.ts ***!
    \*******************************************/

  /*! exports provided: HomepagePage */

  /***/
  function srcAppHomepageHomepagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePage", function () {
      return HomepagePage;
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


    var _services_graphs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/graphs.service */
    "./src/app/services/graphs.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");

    var HomepagePage = /*#__PURE__*/function () {
      function HomepagePage(storage, graphs, login) {
        _classCallCheck(this, HomepagePage);

        this.storage = storage;
        this.graphs = graphs;
        this.login = login;
        this.loaded = 'init';
        this.title = "Home";
        this.predictions = [];
        this.bitcoin = [];
        this.ethereum = [];
        this.dollars = [];
      }

      _createClass(HomepagePage, [{
        key: "load",
        value: function load() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.storage.get('predictions_btc').then(function (predictions) {
              if (predictions != null) {
                _this.predictions = predictions;
              }
            });

            resolve(true);
            return;
          });
        }
      }, {
        key: "load_porto",
        value: function load_porto() {
          var _this2 = this;

          this.get_chart(this.dollars, 'Dollars');
          return new Promise(function (resolve) {
            _this2.storage.get('ethereum').then(function (ethereum) {
              if (ethereum != null) {
                _this2.ethereum = ethereum;
              } else {
                _this2.ethereum = [{
                  amount: 0,
                  timestamp: Date.now(),
                  actual_price: 0
                }];
              }

              _this2.ethereum_display = _this2.ethereum[_this2.ethereum.length - 1].amount;
            });

            _this2.storage.get('dollars').then(function (dollars) {
              if (dollars != null) {
                _this2.dollars = dollars;
              } else {
                _this2.dollars = [{
                  amount: 0,
                  timestamp: Date.now()
                }];
              }

              _this2.dollars_display = _this2.dollars[_this2.dollars.length - 1].amount;
            });

            _this2.storage.get('bitcoin').then(function (bitcoin) {
              if (bitcoin != null) {
                _this2.bitcoin = bitcoin;
              } else {
                _this2.bitcoin = [{
                  amount: 0,
                  timestamp: Date.now(),
                  actual_price: 0
                }];
              }

              _this2.bitcoin_display = _this2.bitcoin[_this2.bitcoin.length - 1].amount;
              resolve(true);
              return;
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedin();
          this.getprice();
          this.load();
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
                    _context2.next = 4;
                    return this.load();

                  case 4:
                    _context2.next = 6;
                    return this.load_porto();

                  case 6:
                    _context2.next = 8;
                    return this.get_chart(this.dollars, 'Dollars');

                  case 8:
                    return _context2.abrupt("return", {
                      'done': true
                    });

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getprice",
        value: function getprice() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var price_eth, price_btc, url_btc, url_eth, btc, eth;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    url_btc = "https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m";
                    url_eth = "https://api.binance.com/api/v1/klines?symbol=ETHUSDT&interval=1m";
                    _context3.next = 5;
                    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url_btc);

                  case 5:
                    btc = _context3.sent;
                    _context3.next = 8;
                    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url_eth);

                  case 8:
                    eth = _context3.sent;

                    if (btc.data.length != 0 && eth.data.length != 0) {
                      this.loaded = 'yes';
                    } else {
                      this.loaded = 'no';
                    }

                    this.time = new Date(btc.data[btc.data.length - 1][0]).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
                    price_btc = Math.floor(btc.data[btc.data.length - 1][1]);
                    price_eth = Math.floor(eth.data[eth.data.length - 1][1]); //These global variables are declared so they display the price but they are not used for any other functions.

                    this.glob_price_btc = price_btc;
                    this.glob_price_eth = price_eth;
                    return _context3.abrupt("return", {
                      'price_btc': price_btc,
                      'price_eth': price_eth
                    });

                  case 18:
                    _context3.prev = 18;
                    _context3.t0 = _context3["catch"](0);
                    this.loaded = 'no';
                    return _context3.abrupt("return");

                  case 22:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 18]]);
          }));
        }
      }, {
        key: "get_chart",
        value: function get_chart(currency, stringcurrency) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    setInterval(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                this.getprice();

                              case 1:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }, 60000); // let values = await this.get_hist_price(this.predictions)

                    this.display_graph = stringcurrency;
                    _context5.next = 4;
                    return this.display_crypto_btc(currency, stringcurrency);

                  case 4:
                    this.lineChart = _context5.sent;

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "display_crypto_btc",
        value: function display_crypto_btc(values, currency) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var hist_time, pred_price, hist_price, j, date, month, day, hour;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    hist_time = [];
                    pred_price = [];
                    hist_price = [];

                    for (j = 0; j < values.length; j++) {
                      date = new Date(values[j].timestamp);
                      month = date.getMonth() + 1;
                      day = date.getDate();
                      hour = date.getHours();
                      hist_time.push(day + "/" + month + "-" + hour);
                      pred_price.push(values[j].amount);
                    }

                    if (values.length == 1) {
                      hist_time = ["Make some purchases first!"];
                      pred_price = [0, 1];
                    }

                    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.lineCanvas.nativeElement, {
                      type: "bar",
                      data: {
                        labels: hist_time,
                        datasets: [{
                          label: currency,
                          fill: true,
                          backgroundColor: "rgb(5, 156, 45, 1)",
                          borderColor: "rgba(220, 220, 220, 1)",
                          borderCapStyle: "butt",
                          borderDash: [],
                          barPercentage: 1,
                          borderDashOffset: 0.0,
                          borderJoinStyle: "miter",
                          pointBorderColor: "rgba(220, 220, 220, 0.5)",
                          pointBackgroundColor: "rgba(220,220,220,1)",
                          pointBorderWidth: 4,
                          pointHoverRadius: 5,
                          pointHoverBackgroundColor: "rgba(220,220,220,1)",
                          pointHoverBorderColor: "rgba(220,220,220,1)",
                          pointHoverBorderWidth: 2,
                          pointRadius: 4,
                          pointHitRadius: 10,
                          data: pred_price,
                          spanGaps: false,
                          datalabels: {
                            display: false
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
                              maxTicksLimit: 4,
                              autoSkip: true,
                              maxRotation: 0,
                              minRotation: 0
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
                              min: Math.floor(Math.min.apply(Math, _toConsumableArray(pred_price))),
                              max: Math.floor(Math.max.apply(Math, _toConsumableArray(pred_price))),
                              maxTicksLimit: 2
                            },
                            gridLines: {
                              borderDash: [8, 4],
                              color: "#348632",
                              display: false
                            }
                          }]
                        },
                        legend: {
                          display: false,
                          position: 'bottom',
                          labels: {
                            boxWidth: 10,
                            usePointStyle: false
                          }
                        }
                      }
                    });
                    return _context6.abrupt("return", this.lineChart);

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "get_hist_price",
        value: function get_hist_price(predictions) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var hist_time, hist_price, pred_price, url, res, j, date, month, day, hour, i, date_api;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    hist_time = [];
                    hist_price = [];
                    pred_price = [];
                    url = "https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1h";
                    _context7.next = 6;
                    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);

                  case 6:
                    res = _context7.sent;

                    for (j = 0; j < predictions.length; j++) {
                      date = new Date(predictions[j].timestamp);
                      month = date.getMonth() + 1;
                      day = date.getDate();
                      hour = date.getHours();
                      hist_time.push(day + "/" + month + "-" + hour + ":00");
                      pred_price.push(predictions[j].price);

                      for (i = 0; i < res.data.length; i++) {
                        date_api = new Date(res.data[i][0]);

                        if (date_api.getMonth() + 1 == month && date_api.getDate() == day && date_api.getHours() == hour) {
                          hist_price.push(Math.floor(res.data[i][1]));
                        }
                      }
                    }

                    return _context7.abrupt("return", {
                      'time': hist_time,
                      'hist_price': hist_price,
                      'pred_price': pred_price
                    });

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }, {
        key: "buy",
        value: function buy() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this4 = this;

            var test, prices;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    _context11.next = 3;
                    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m');

                  case 3:
                    test = _context11.sent;
                    _context11.next = 6;
                    return this.getprice();

                  case 6:
                    prices = _context11.sent;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                      title: 'Do you want to buy Bitcoin or Ethereum?',
                      icon: 'info',
                      showCloseButton: true,
                      showCancelButton: true,
                      focusConfirm: false,
                      confirmButtonText: 'Bitcoin',
                      cancelButtonText: 'Ethereum'
                    }).then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                        var _this5 = this;

                        var _yield$sweetalert2__W, buying, _yield$sweetalert2__W2, _buying;

                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) {
                            switch (_context10.prev = _context10.next) {
                              case 0:
                                if (!result.value) {
                                  _context10.next = 8;
                                  break;
                                }

                                _context10.next = 3;
                                return sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                  title: 'One Bitcoin is currently $' + prices.price_btc + ', how many would you like to buy?',
                                  input: 'number',
                                  showCancelButton: true,
                                  inputValidator: function inputValidator(value) {
                                    if (!value) {
                                      return 'You need to write something!';
                                    }
                                  }
                                });

                              case 3:
                                _yield$sweetalert2__W = _context10.sent;
                                buying = _yield$sweetalert2__W.value;

                                if (buying) {
                                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                    title: 'Are you sure you want to buy ' + buying + " Bitcoin for $" + prices.price_btc * Number(buying) + '?',
                                    showCloseButton: false,
                                    showCancelButton: true,
                                    focusConfirm: false,
                                    confirmButtonText: 'Yes',
                                    cancelButtonText: 'No'
                                  }).then(function (result) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                                      return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                        while (1) {
                                          switch (_context8.prev = _context8.next) {
                                            case 0:
                                              this.bitcoin.push({
                                                amount: this.bitcoin[this.bitcoin.length - 1].amount + Number(buying),
                                                timestamp: Date.now(),
                                                actual_price: prices.price_btc
                                              });
                                              this.dollars.push({
                                                amount: this.dollars[this.dollars.length - 1].amount - prices.price_btc * Number(buying),
                                                timestamp: Date.now()
                                              });
                                              _context8.next = 4;
                                              return this.storage.set('bitcoin', this.bitcoin);

                                            case 4:
                                              _context8.next = 6;
                                              return this.storage.set('dollars', this.dollars);

                                            case 6:
                                              _context8.next = 8;
                                              return this.load_porto();

                                            case 8:
                                              return _context8.abrupt("return", {
                                                'dollars': this.dollars[this.dollars.length - 1].amount,
                                                'bitcoin': this.bitcoin[this.bitcoin.length - 1].amount
                                              });

                                            case 9:
                                            case "end":
                                              return _context8.stop();
                                          }
                                        }
                                      }, _callee8, this);
                                    }));
                                  });
                                }

                                _context10.next = 17;
                                break;

                              case 8:
                                if (!(result.dismiss == sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel)) {
                                  _context10.next = 17;
                                  break;
                                }

                                _context10.next = 11;
                                return sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                  title: 'One Ethereum is currently $' + prices.price_eth + ', how many would you like to buy?',
                                  input: 'number',
                                  showCancelButton: true,
                                  showCloseButton: false,
                                  inputValidator: function inputValidator(value) {
                                    if (!value) {
                                      return 'You need to write something!';
                                    }
                                  }
                                });

                              case 11:
                                _yield$sweetalert2__W2 = _context10.sent;
                                _buying = _yield$sweetalert2__W2.value;

                                if (!_buying) {
                                  _context10.next = 16;
                                  break;
                                }

                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                  title: 'Are you sure you want to buy ' + _buying + " Ethereum for $" + prices.price_eth * Number(_buying) + '?',
                                  showCloseButton: false,
                                  showCancelButton: true,
                                  focusConfirm: false,
                                  confirmButtonText: 'Yes',
                                  cancelButtonText: 'No'
                                }).then(function (result) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                                      while (1) {
                                        switch (_context9.prev = _context9.next) {
                                          case 0:
                                            this.ethereum.push({
                                              amount: this.ethereum[this.ethereum.length - 1].amount + Number(_buying),
                                              timestamp: Date.now(),
                                              actual_price: prices.price_eth
                                            });
                                            this.dollars.push({
                                              amount: this.dollars[this.dollars.length - 1].amount - prices.price_eth * Number(_buying),
                                              timestamp: Date.now()
                                            });
                                            _context9.next = 4;
                                            return this.storage.set('ethereum', this.ethereum);

                                          case 4:
                                            _context9.next = 6;
                                            return this.storage.set('dollars', this.dollars);

                                          case 6:
                                            _context9.next = 8;
                                            return this.load_porto();

                                          case 8:
                                            return _context9.abrupt("return", {
                                              'dollars': this.dollars[this.dollars.length - 1].amount,
                                              'ethereum': this.ethereum[this.ethereum.length - 1].amount
                                            });

                                          case 9:
                                          case "end":
                                            return _context9.stop();
                                        }
                                      }
                                    }, _callee9, this);
                                  }));
                                });
                                return _context10.abrupt("return");

                              case 16:
                                return _context10.abrupt("return");

                              case 17:
                              case "end":
                                return _context10.stop();
                            }
                          }
                        }, _callee10);
                      }));
                    });
                    _context11.next = 13;
                    break;

                  case 10:
                    _context11.prev = 10;
                    _context11.t0 = _context11["catch"](0);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                      icon: 'error',
                      title: 'You have no active internet connection'
                    });

                  case 13:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[0, 10]]);
          }));
        }
      }, {
        key: "sell",
        value: function sell() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var _this6 = this;

            var test, prices;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.prev = 0;
                    _context15.next = 3;
                    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m');

                  case 3:
                    test = _context15.sent;
                    _context15.next = 6;
                    return this.getprice();

                  case 6:
                    prices = _context15.sent;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                      title: 'Do you want to sell Bitcoin or Ethereum?',
                      icon: 'info',
                      showCloseButton: true,
                      showCancelButton: true,
                      focusConfirm: false,
                      confirmButtonText: 'Bitcoin',
                      cancelButtonText: 'Ethereum'
                    }).then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                        var _this7 = this;

                        var _yield$sweetalert2__W3, buying, _yield$sweetalert2__W4, _buying2;

                        return regeneratorRuntime.wrap(function _callee14$(_context14) {
                          while (1) {
                            switch (_context14.prev = _context14.next) {
                              case 0:
                                if (!result.value) {
                                  _context14.next = 8;
                                  break;
                                }

                                _context14.next = 3;
                                return sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                  title: 'One Bitcoin is currently $' + prices.price_btc + '. You have ' + this.bitcoin[this.bitcoin.length - 1].amount + ' bitcoin, how many would you like to sell?',
                                  input: 'number',
                                  showCancelButton: true,
                                  inputValidator: function inputValidator(value) {
                                    if (!value) {
                                      return 'You need to write something!';
                                    }
                                  }
                                });

                              case 3:
                                _yield$sweetalert2__W3 = _context14.sent;
                                buying = _yield$sweetalert2__W3.value;

                                if (buying) {
                                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                    title: 'Are you sure you want to sell ' + buying + " Bitcoin for $" + prices.price_btc * Number(buying) + '?',
                                    showCloseButton: true,
                                    showCancelButton: true,
                                    focusConfirm: false,
                                    confirmButtonText: 'Yes',
                                    cancelButtonText: 'No'
                                  }).then(function (result) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                                      return regeneratorRuntime.wrap(function _callee12$(_context12) {
                                        while (1) {
                                          switch (_context12.prev = _context12.next) {
                                            case 0:
                                              this.bitcoin.push({
                                                amount: this.bitcoin[this.bitcoin.length - 1].amount - Number(buying),
                                                timestamp: Date.now(),
                                                actual_price: prices.price_btc
                                              });
                                              this.dollars.push({
                                                amount: this.dollars[this.dollars.length - 1].amount + prices.price_btc * Number(buying),
                                                timestamp: Date.now()
                                              });
                                              _context12.next = 4;
                                              return this.storage.set('bitcoin', this.bitcoin);

                                            case 4:
                                              _context12.next = 6;
                                              return this.storage.set('dollars', this.dollars);

                                            case 6:
                                              _context12.next = 8;
                                              return this.load_porto();

                                            case 8:
                                              return _context12.abrupt("return", {
                                                'dollars': this.dollars[this.dollars.length - 1].amount,
                                                'bitcoin': this.bitcoin[this.bitcoin.length - 1].amount
                                              });

                                            case 9:
                                            case "end":
                                              return _context12.stop();
                                          }
                                        }
                                      }, _callee12, this);
                                    }));
                                  });
                                }

                                _context14.next = 17;
                                break;

                              case 8:
                                if (!(result.dismiss == sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel)) {
                                  _context14.next = 17;
                                  break;
                                }

                                _context14.next = 11;
                                return sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                  title: 'One Ethereum is currently $' + prices.price_eth + '. You have ' + this.ethereum[this.ethereum.length - 1].amount + ' ethereum, how many would you like to sell?',
                                  input: 'number',
                                  showCancelButton: true,
                                  inputValidator: function inputValidator(value) {
                                    if (!value) {
                                      return 'You need to write something!';
                                    }
                                  }
                                });

                              case 11:
                                _yield$sweetalert2__W4 = _context14.sent;
                                _buying2 = _yield$sweetalert2__W4.value;

                                if (!_buying2) {
                                  _context14.next = 16;
                                  break;
                                }

                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                  title: 'Are you sure you want to sell ' + _buying2 + " Ethereum for $" + prices.price_eth * Number(_buying2) + '?',
                                  showCloseButton: true,
                                  showCancelButton: true,
                                  focusConfirm: false,
                                  confirmButtonText: 'Yes',
                                  cancelButtonText: 'No'
                                }).then(function (result) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                                      while (1) {
                                        switch (_context13.prev = _context13.next) {
                                          case 0:
                                            this.ethereum.push({
                                              amount: this.ethereum[this.ethereum.length - 1].amount - Number(_buying2),
                                              timestamp: Date.now(),
                                              actual_price: prices.price_eth
                                            });
                                            this.dollars.push({
                                              amount: this.dollars[this.dollars.length - 1].amount + prices.price_eth * Number(_buying2),
                                              timestamp: Date.now()
                                            });
                                            _context13.next = 4;
                                            return this.storage.set('ethereum', this.ethereum);

                                          case 4:
                                            _context13.next = 6;
                                            return this.storage.set('dollars', this.dollars);

                                          case 6:
                                            _context13.next = 8;
                                            return this.load_porto();

                                          case 8:
                                            return _context13.abrupt("return", {
                                              'dollars': this.dollars[this.dollars.length - 1].amount,
                                              'ethereum': this.ethereum[this.ethereum.length - 1].amount
                                            });

                                          case 9:
                                          case "end":
                                            return _context13.stop();
                                        }
                                      }
                                    }, _callee13, this);
                                  }));
                                });
                                return _context14.abrupt("return");

                              case 16:
                                return _context14.abrupt("return");

                              case 17:
                              case "end":
                                return _context14.stop();
                            }
                          }
                        }, _callee14, this);
                      }));
                    });
                    _context15.next = 13;
                    break;

                  case 10:
                    _context15.prev = 10;
                    _context15.t0 = _context15["catch"](0);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                      icon: 'error',
                      title: 'You have no active internet connection'
                    });

                  case 13:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this, [[0, 10]]);
          }));
        }
      }]);

      return HomepagePage;
    }();

    HomepagePage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _services_graphs_service__WEBPACK_IMPORTED_MODULE_6__["GraphsService"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("lineCanvas")], HomepagePage.prototype, "lineCanvas", void 0);
    HomepagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homepage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homepage.page.scss */
      "./src/app/homepage/homepage.page.scss"))["default"]]
    })], HomepagePage);
    /***/
  },

  /***/
  "./src/app/services/graphs.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/graphs.service.ts ***!
    \********************************************/

  /*! exports provided: GraphsService */

  /***/
  function srcAppServicesGraphsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphsService", function () {
      return GraphsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GraphsService = function GraphsService() {
      _classCallCheck(this, GraphsService);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("lineCanvas")], GraphsService.prototype, "lineCanvas", void 0);
    GraphsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GraphsService);
    /***/
  }
}]);
//# sourceMappingURL=homepage-homepage-module-es5.js.map