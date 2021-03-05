(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/countries/countries.component */ "./src/app/components/countries/countries.component.ts");






var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'countries', component: _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_3__["CountriesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'covid19-tracker';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".viewport[_ngcontent-%COMP%]{\r\n    zoom: 1.0;\r\n    width: extend-to-zoom;\r\n}\r\n.-ms-viewport[_ngcontent-%COMP%]{\r\n    width: extend-to-zoom;\r\n    zoom: 1.0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld3BvcnR7XHJcbiAgICB6b29tOiAxLjA7XHJcbiAgICB3aWR0aDogZXh0ZW5kLXRvLXpvb207XHJcbn1cclxuLi1tcy12aWV3cG9ydHtcclxuICAgIHdpZHRoOiBleHRlbmQtdG8tem9vbTtcclxuICAgIHpvb206IDEuMDtcclxufSJdfQ== */"] });
    return AppComponent;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/countries/countries.component */ "./src/app/components/countries/countries.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard-card/dashboard-card.component */ "./src/app/components/dashboard-card/dashboard-card.component.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/__ivy_ngcc__/index.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_9__["Ng2GoogleChartsModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_6__["CountriesComponent"],
        _components_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_8__["DashboardCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ng2_google_charts__WEBPACK_IMPORTED_MODULE_9__["Ng2GoogleChartsModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_6__["CountriesComponent"],
                    _components_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_8__["DashboardCardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    ng2_google_charts__WEBPACK_IMPORTED_MODULE_9__["Ng2GoogleChartsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/countries/countries.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/countries/countries.component.ts ***!
  \*************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/__ivy_ngcc__/index.js");







function CountriesComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var con_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", con_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](con_r3);
} }
function CountriesComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var cs_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, cs_r4.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cs_r4.cases);
} }
var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(service) {
        this.service = service;
        this.countries = [];
        this.totalConfirmed = 0;
        this.totalActive = 0;
        this.totalDeaths = 0;
        this.totalRecovered = 0;
        this.loading = true;
        this.lineChart = {
            chartType: 'LineChart'
        };
    }
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.service.getDateWiseData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.dateWiseData = result;
        })), this.service.getGlobalData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.data = result;
            _this.data.forEach(function (cs) {
                _this.countries.push(cs.country);
            });
        }))).subscribe({
            complete: function () {
                _this.updateValues('India');
                _this.loading = false;
            }
        });
    };
    CountriesComponent.prototype.updateChart = function () {
        var dataTable = [];
        dataTable.push(["Date", 'Cases']);
        this.selectedCountryData.forEach(function (cs) {
            dataTable.push([cs.date, cs.cases]);
        });
        this.lineChart = {
            chartType: 'LineChart',
            dataTable: dataTable,
            //firstRowIsData: true,
            options: {
                height: 500,
                animation: {
                    duration: 1000,
                    easing: 'out',
                },
            },
        };
    };
    CountriesComponent.prototype.updateValues = function (country) {
        var _this = this;
        console.log(country);
        this.data.forEach(function (cs) {
            if (cs.country == country) {
                _this.totalActive = cs.active;
                _this.totalDeaths = cs.deaths;
                _this.totalRecovered = cs.recovered;
                _this.totalConfirmed = cs.confirmed;
            }
        });
        this.selectedCountryData = this.dateWiseData[country];
        // console.log(this.selectedCountryData);
        this.updateChart();
    };
    CountriesComponent.ɵfac = function CountriesComponent_Factory(t) { return new (t || CountriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"])); };
    CountriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountriesComponent, selectors: [["app-countries"]], decls: 56, vars: 9, consts: [[2, "padding", "1%"], [1, "ui", "inverted", "dimmer"], [1, "ui", "text", "loader"], [1, "jumbotron", "bg-white", "text-center", "p-0", "m-0"], [1, "display-4"], [1, "mx-auto"], [1, "form-group", "col-lg-5", "mx-auto"], ["for", "c"], ["name", "", "id", "c", 1, "form-control", 3, "change"], ["input", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "card-title"], [1, "card", "text-white", "bg-primary", "mb-3", 2, "max-width", "18rem"], [1, "card-header"], [1, "card-body"], [1, "card-text"], [1, "card", "text-white", "bg-secondary", "mb-3", 2, "max-width", "18rem"], [1, "card", "text-white", "bg-success", "mb-3", 2, "max-width", "18rem"], [1, "card", "text-white", "bg-danger", "mb-3", 2, "max-width", "18rem"], [1, "row"], [1, "col"], [1, "table"], [4, "ngFor", "ngForOf"], [3, "data"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [3, "value"]], template: function CountriesComponent_Template(rf, ctx) { if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Corona Covid-19 Tracker Country Wise");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Country");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CountriesComponent_Template_select_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.updateValues(_r0.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CountriesComponent_option_14_Template, 2, 2, "option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CONFIRMED");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ACTIVE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "RECOVERED");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "DEATHS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "table", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sno.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cases");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CountriesComponent_tr_52_Template, 8, 5, "tr", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "google-chart", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "meta", 24);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalConfirmed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalRecovered);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalDeaths);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedCountryData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineChart);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__["GoogleChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".viewport[_ngcontent-%COMP%]{\r\n    zoom: 1.0;\r\n    width: extend-to-zoom;\r\n}\r\n.-ms-viewport[_ngcontent-%COMP%]{\r\n    width: extend-to-zoom;\r\n    zoom: 1.0;\r\n}\r\n.card-title[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    padding: 40px 10px 10px 10px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    height: 150px;\r\n    align-items: center;\r\n    transition: all .2s ease-in-out;\r\n\r\n}\r\n.card[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.1);\r\n}\r\n.card-header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    text-align: center;\r\n    height: 50px;\r\n    width:100%;\r\n    justify-content: center;\r\n    display: flex; \r\n    align-items: center;\r\n\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex; \r\n    text-align: center;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLCtCQUErQjs7QUFFbkM7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld3BvcnR7XHJcbiAgICB6b29tOiAxLjA7XHJcbiAgICB3aWR0aDogZXh0ZW5kLXRvLXpvb207XHJcbn1cclxuLi1tcy12aWV3cG9ydHtcclxuICAgIHdpZHRoOiBleHRlbmQtdG8tem9vbTtcclxuICAgIHpvb206IDEuMDtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIHBhZGRpbmc6IDQwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG59XHJcbi5jYXJkOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufSJdfQ== */"] });
    return CountriesComponent;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-countries',
                templateUrl: './countries.component.html',
                styleUrls: ['./countries.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/dashboard-card/dashboard-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard-card/dashboard-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardComponent", function() { return DashboardCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var DashboardCardComponent = /** @class */ (function () {
    function DashboardCardComponent() {
    }
    DashboardCardComponent.prototype.ngOnInit = function () {
    };
    DashboardCardComponent.ɵfac = function DashboardCardComponent_Factory(t) { return new (t || DashboardCardComponent)(); };
    DashboardCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardCardComponent, selectors: [["app-dashboard-card"]], inputs: { totalConfirmed: "totalConfirmed", totalDeaths: "totalDeaths", totalActive: "totalActive", totalRecovered: "totalRecovered" }, decls: 30, vars: 4, consts: [[1, "row"], [1, "card", "col", "p-3", "m-3"], [1, "ui", "statistic"], [1, "label"], [1, "value"], ["name", "viewport", "content", "width=device-width, initial-scale=1"]], template: function DashboardCardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Confirmed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Recovered");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Deaths");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Active");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "meta", 5);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalConfirmed, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalRecovered, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalDeaths, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalActive, " ");
        } }, styles: [".viewport[_ngcontent-%COMP%]{\r\n    zoom: 1.0;\r\n    width: extend-to-zoom;\r\n}\r\n.-ms-viewport[_ngcontent-%COMP%]{\r\n    width: extend-to-zoom;\r\n    zoom: 1.0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQtY2FyZC9kYXNoYm9hcmQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkLWNhcmQvZGFzaGJvYXJkLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3cG9ydHtcclxuICAgIHpvb206IDEuMDtcclxuICAgIHdpZHRoOiBleHRlbmQtdG8tem9vbTtcclxufVxyXG4uLW1zLXZpZXdwb3J0e1xyXG4gICAgd2lkdGg6IGV4dGVuZC10by16b29tO1xyXG4gICAgem9vbTogMS4wO1xyXG59Il19 */"] });
    return DashboardCardComponent;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-card',
                templateUrl: './dashboard-card.component.html',
                styleUrls: ['./dashboard-card.component.css']
            }]
    }], function () { return []; }, { totalConfirmed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalConfirmed']
        }], totalDeaths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalDeaths']
        }], totalActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalActive']
        }], totalRecovered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalRecovered']
        }] }); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.totalConfirmed = 0;
        this.totalActive = 0;
        this.totalDeaths = 0;
        this.totalRecovered = 0;
        this.loading = true;
        this.pieChart = {
            chartType: 'PieChart'
        };
        this.columnChart = {
            chartType: 'ColumnChart'
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getGlobalData()
            .subscribe({
            next: function (result) {
                console.log(result);
                _this.globalData = result;
                result.forEach(function (cs) {
                    if (!Number.isNaN(cs.confirmed)) {
                        _this.totalActive += cs.active;
                        _this.totalConfirmed += cs.confirmed;
                        _this.totalDeaths += cs.deaths;
                        _this.totalRecovered += cs.active;
                    }
                });
                _this.initChart('c');
            },
            complete: function () {
                _this.loading = false;
            }
        });
    };
    HomeComponent.prototype.updateChart = function (input) {
        console.log(input.value);
        this.initChart(input.value);
    };
    HomeComponent.prototype.initChart = function (caseType) {
        var datatable = [];
        datatable.push(["Country", "Cases"]);
        this.globalData.forEach(function (cs) {
            var value;
            if (caseType == 'c')
                if (cs.confirmed > 2000)
                    value = cs.confirmed;
            if (caseType == 'a')
                if (cs.active > 2000)
                    value = cs.active;
            if (caseType == 'd')
                if (cs.deaths > 1000)
                    value = cs.deaths;
            if (caseType == 'r')
                if (cs.recovered > 2000)
                    value = cs.recovered;
            datatable.push([
                cs.country, value
            ]);
        });
        console.log(datatable);
        this.pieChart = {
            chartType: 'PieChart',
            dataTable: datatable,
            //firstRowIsData: true,
            options: {
                height: 500,
                animation: {
                    duration: 1000,
                    easing: 'out',
                },
            },
        };
        this.columnChart = {
            chartType: 'ColumnChart',
            dataTable: datatable,
            //firstRowIsData: true,
            options: {
                height: 500,
                animation: {
                    duration: 1000,
                    easing: 'out',
                },
            },
        };
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 71, vars: 16, consts: [[2, "padding", "1%"], [1, "ui", "inverted", "dimmer"], [1, "ui", "text", "loader"], [1, "display-4", 2, "text-align", "center"], [1, "card-title"], [1, "card", "text-white", "bg-primary", "mb-3", 2, "max-width", "18rem"], [1, "card-header"], [1, "card-body"], [1, "card-text"], [1, "card", "text-white", "bg-secondary", "mb-3", 2, "max-width", "18rem"], [1, "card", "text-white", "bg-success", "mb-3", 2, "max-width", "18rem"], [1, "card", "text-white", "bg-danger", "mb-3", 2, "max-width", "18rem"], [1, "ui", "form"], [1, "inline", "fields"], [1, "radio1"], ["for", "fruit", 1, "label1"], [1, "radio2"], [1, "field"], [1, "ui", "radio", "checkbox"], ["type", "radio", "id", "c", "value", "c", "name", "casetype", "checked", "", "tabindex", "0", 1, "hidden", 3, "click"], ["c", ""], ["for", "c"], ["type", "radio", "value", "d", "id", "d", "name", "casetype", "tabindex", "0", 1, "hidden", 3, "click"], ["d", ""], ["for", "d"], ["type", "radio", "value", "r", "id", "r", "name", "casetype", "tabindex", "0", 1, "hidden", 3, "click"], ["r", ""], ["for", "r"], ["id", "a", "type", "radio", "value", "a", "name", "casetype", "tabindex", "0", 1, "hidden", 3, "click"], ["a", ""], ["for", "a"], [1, "row"], [1, "col"], [3, "data"], ["name", "viewport", "content", "width=device-width, initial-scale=1"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Corona Covid-19 Tracker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CONFIRMED");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ACTIVE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "RECOVERED");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "DEATHS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select Case Type :");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return ctx.updateChart(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Confirmed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 22, 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx.updateChart(_r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Deaths");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 25, 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return ctx.updateChart(_r2); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Recovered");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 28, 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62); return ctx.updateChart(_r3); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Active");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "google-chart", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "google-chart", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "meta", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, ctx.totalConfirmed));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 10, ctx.totalActive));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 12, ctx.totalRecovered));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 14, ctx.totalDeaths));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.columnChart);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChart);
        } }, directives: [ng2_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.totalConfirmed[_ngcontent-%COMP%]{\r\n    background-color: blue;\r\n}\r\n.total1[_ngcontent-%COMP%]{\r\n    background-color: blue;\r\n}\r\n.ui[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.display-4[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.jumbotron[_ngcontent-%COMP%]{\r\n    flex-wrap: wrap;\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .display-4[_ngcontent-%COMP%] {\r\ntext-align: center;    \r\n         }\r\n\r\n        .row[_ngcontent-%COMP%]{\r\n            align-items: center;\r\n            text-align: center;\r\n        }\r\n            \r\n  }\r\n.card-title[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: space-evenly;\r\n      padding: 40px 10px 10px 10px;\r\n  }\r\n.card[_ngcontent-%COMP%]{\r\n      width: 300px;\r\n      height: 150px;\r\n      align-items: center;\r\n      transition: all .2s ease-in-out;\r\n\r\n  }\r\n.card[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.1);\r\n  }\r\n.card-header[_ngcontent-%COMP%]{\r\n      font-size: 20px;\r\n      text-align: center;\r\n      height: 50px;\r\n      width:100%;\r\n      justify-content: center;\r\n      display: flex; \r\n      align-items: center;\r\n\r\n  }\r\n.card-body[_ngcontent-%COMP%]{\r\n      font-size: 30px;\r\n      justify-content: center;\r\n      align-items: center;\r\n      justify-content: center;\r\n      display: flex; \r\n      text-align: center;\r\n\r\n  }\r\n.radio1[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n      padding: 20px 0 0 60px;\r\n\r\n  }\r\n.radio2[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      padding-left: 10px;\r\n  }\r\n.label1[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJO0FBQ0osa0JBQWtCO1NBQ1Q7O1FBRUQ7WUFDSSxtQkFBbUI7WUFDbkIsa0JBQWtCO1FBQ3RCOztFQUVOO0FBQ0E7TUFDSSxhQUFhO01BQ2IsZUFBZTtNQUNmLDZCQUE2QjtNQUM3Qiw0QkFBNEI7RUFDaEM7QUFDQTtNQUNJLFlBQVk7TUFDWixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLCtCQUErQjs7RUFFbkM7QUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNBO01BQ0ksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osVUFBVTtNQUNWLHVCQUF1QjtNQUN2QixhQUFhO01BQ2IsbUJBQW1COztFQUV2QjtBQUNBO01BQ0ksZUFBZTtNQUNmLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGFBQWE7TUFDYixrQkFBa0I7O0VBRXRCO0FBRUE7TUFDSSxhQUFhO01BQ2IsZUFBZTtNQUNmLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLHNCQUFzQjs7RUFFMUI7QUFDQTtNQUNJLGFBQWE7TUFDYixlQUFlO01BQ2Ysa0JBQWtCO0VBQ3RCO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4udG90YWxDb25maXJtZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcbi50b3RhbDF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcbi51aXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGlzcGxheS00e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZGlzcGxheS00IHtcclxudGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93e1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICB9XHJcbiAgLmNhcmQtdGl0bGV7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIC5jYXJke1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIH1cclxuICAuY2FyZDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgLmNhcmQtaGVhZGVye1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuICAuY2FyZC1ib2R5e1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuICAucmFkaW8xe1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMCAwIDYwcHg7XHJcblxyXG4gIH1cclxuICAucmFkaW8ye1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgLmxhYmVsMXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG5cclxuIl19 */"] });
    return HomeComponent;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navSlide = function () {
            var burger = document.querySelector('.burger');
            var nav = document.querySelector('.nav-nav');
            var navnav = document.querySelectorAll('.nav-nav li');
            burger.addEventListener('click', function () {
                nav.classList.toggle('active');
                /*navnav.forEach((link, index) => {
                  if (link.style.animation){
                    link.style.animation = " ";
                  } else{
                   link.style.animation = `navnavFade 0.5s ease forwards ${ index / 7 + 0.3}s`;
           
                  }
                 });*/
                burger.classList.toggle("toggle");
            });
        };
        navSlide();
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 19, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-dark"], [1, "logo"], [1, "navbar-brand", 2, "color", "white"], ["src", "assets\\images\\55b8ded81cec1583268204-coronavirus.png", "height", "60", "alt", ""], [1, "nav-nav"], [1, "nav-item", "active"], ["routerLink", "/", 1, "btn", "btn-secondary"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "countries", 1, "btn", "btn-secondary"], [1, "burger"], [1, "line1"], [1, "line2"], [1, "line3"], ["name", "viewport", "content", "width=device-width, initial-scale=1"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Covid-19 Daily Report ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(current)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Countries");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "meta", 14);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n  padding-top: 0.5%;\r\n  padding-bottom: 0%;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  padding-top: 0%;\r\n}\r\n.nav-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  text-align: center;\r\n  justify-content: space-around;\r\n  margin-left: auto;\r\n  padding: 20px 60px 0 0;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: white;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n  margin-top: 0px;\r\n}\r\n.viewport[_ngcontent-%COMP%] {\r\n  zoom: 1;\r\n  width: extend-to-zoom;\r\n}\r\n.-ms-viewport[_ngcontent-%COMP%] {\r\n  width: extend-to-zoom;\r\n  zoom: 1;\r\n}\r\n.nav-item[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n  justify-content: center;\r\n}\r\n.nav-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  align-items: center;\r\n}\r\n.nav-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.burger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 3px;\r\n  background-color: white;\r\n  margin: 5px;\r\n  transition: all 0.3s ease;\r\n}\r\n.burger[_ngcontent-%COMP%] {\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n@media screen and (max-width: 1024px) {\r\n  .nav-nav[_ngcontent-%COMP%] {\r\n    padding: 15px 0 0 0;\r\n  }\r\n}\r\n@media screen and (max-width: 768px) {\r\n  body[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n  }\r\n  .nav-nav[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0px;\r\n    height: 90vh;\r\n    top: 11vh;\r\n    background-color: #343a40 !important;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 50%;\r\n    padding: 20px;\r\n    justify-content: space-around;\r\n    z-index: 1;\r\n    transform: translateX(100%);\r\n    display: block;\r\n    transition: transform 0.5s ease-in;\r\n  }\r\n  .nav-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n  .burger[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 22%;\r\n  }\r\n}\r\n.active[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\r\n@-webkit-keyframes navnavFade {\r\n  form {\r\n    opacity: 0;\r\n    transform: translateX(50px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n@keyframes navnavFade {\r\n  form {\r\n    opacity: 0;\r\n    transform: translateX(50px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n.toggle[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%] {\r\n  transform: rotate(-45deg) translate(-5px, 6px);\r\n}\r\n.toggle[_ngcontent-%COMP%]   .line2[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n.toggle[_ngcontent-%COMP%]   .line3[_ngcontent-%COMP%] {\r\n  transform: rotate(45deg) translate(-5px, -7px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsT0FBTztFQUNQLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLE9BQU87QUFDVDtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtFQUM1QjtBQUNGO0FBVEE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDViwwQkFBMEI7RUFDNUI7QUFDRjtBQUVBO0VBQ0UsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLDhDQUE4QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgcGFkZGluZy10b3A6IDAuNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDAlO1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxufVxyXG5cclxuLm5hdi1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHggNjBweCAwIDA7XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0biB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi52aWV3cG9ydCB7XHJcbiAgem9vbTogMTtcclxuICB3aWR0aDogZXh0ZW5kLXRvLXpvb207XHJcbn1cclxuLi1tcy12aWV3cG9ydCB7XHJcbiAgd2lkdGg6IGV4dGVuZC10by16b29tO1xyXG4gIHpvb206IDE7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5uYXYtbmF2IGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm5hdi1uYXYgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uYnVyZ2VyIGRpdiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4uYnVyZ2VyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLm5hdi1uYXYge1xyXG4gICAgcGFkZGluZzogMTVweCAwIDAgMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAubmF2LW5hdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgdG9wOiAxMXZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbjtcclxuICB9XHJcbiAgLm5hdi1uYXYgbGkge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmJ1cmdlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG5hdm5hdkZhZGUge1xyXG4gIGZvcm0ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLnRvZ2dsZSAubGluZTEge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC01cHgsIDZweCk7XHJcbn1cclxuLnRvZ2dsZSAubGluZTIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLnRvZ2dsZSAubGluZTMge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTVweCwgLTdweCk7XHJcbn1cclxuIl19 */"] });
    return NavbarComponent;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
        this.globalDataUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-04-2020.csv";
        this.dateWiseDataUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
    }
    DataServiceService.prototype.getDateWiseData = function () {
        return this.http.get(this.dateWiseDataUrl, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            var rows = result.split('\n');
            // console.log(rows);
            var mainData = {};
            var header = rows[0];
            var dates = header.split(/,(?=\S)/);
            dates.splice(0, 4);
            rows.splice(0, 1);
            rows.forEach(function (row) {
                var cols = row.split(/,(?=\S)/);
                var con = cols[1];
                cols.splice(0, 4);
                // console.log(con , cols);
                mainData[con] = [];
                cols.forEach(function (value, index) {
                    var dw = {
                        cases: +value,
                        country: con,
                        date: new Date(Date.parse(dates[index]))
                    };
                    mainData[con].push(dw);
                });
            });
            // console.log(mainData);
            return mainData;
        }));
    };
    DataServiceService.prototype.getGlobalData = function () {
        return this.http.get(this.globalDataUrl, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            var data = [];
            var raw = {};
            var rows = result.split('\n');
            rows.splice(0, 1);
            // console.log(rows);
            rows.forEach(function (row) {
                var cols = row.split(/,(?=\S)/);
                var cs = {
                    country: cols[3],
                    confirmed: +cols[7],
                    deaths: +cols[8],
                    recovered: +cols[9],
                    active: +cols[10],
                };
                var temp = raw[cs.country];
                if (temp) {
                    temp.active = cs.active + temp.active;
                    temp.confirmed = cs.confirmed + temp.confirmed;
                    temp.deaths = cs.deaths + temp.deaths;
                    temp.recovered = cs.recovered + temp.recovered;
                    raw[cs.country] = temp;
                }
                else {
                    raw[cs.country] = cs;
                }
            });
            return Object.values(raw);
        }));
    };
    DataServiceService.ɵfac = function DataServiceService_Factory(t) { return new (t || DataServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    DataServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataServiceService, factory: DataServiceService.ɵfac, providedIn: 'root' });
    return DataServiceService;
}());

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Saikishor Udari\Desktop\Covid-19---Corona-Cases-Tracker-Angular-Application-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map