webpackJsonp([3],{

/***/ 146:
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
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		586,
		2
	],
	"../pages/camera/camera.module": [
		587,
		1
	],
	"../pages/escolha/escolha.module": [
		588,
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
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoDaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let AgendamentoDaoProvider = class AgendamentoDaoProvider {
    constructor(_agendamentoStorage) {
        this._agendamentoStorage = _agendamentoStorage;
    }
    _geraChave(agendamento) {
        return agendamento.emailCliente + agendamento.data.substr(0, 10);
    }
    salva(agendamento) {
        let chave = this._geraChave(agendamento);
        let promise = this._agendamentoStorage.set(chave, agendamento);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(promise);
    }
    ehDuplicado(agendamento) {
        let chave = this._geraChave(agendamento);
        let promise = this._agendamentoStorage.get(chave).then(dado => dado ? true : false);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(promise);
    }
};
AgendamentoDaoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])('agendamentoStorage')),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* Storage */]])
], AgendamentoDaoProvider);

//# sourceMappingURL=agendamento-dao.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AgendamentosServiceProvider = class AgendamentosServiceProvider {
    constructor(_http) {
        this._http = _http;
        this._url = 'http://www.mocky.io/v2';
    }
    agenda(agendamento) {
        return this._http.post(this._url + '/5b8560a73000009b247292bf', agendamento)
            .do(() => agendamento.enviado = true)
            .catch((err) => __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new Error('Erro ao criar agendamento')));
    }
};
AgendamentosServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], AgendamentosServiceProvider);

//# sourceMappingURL=agendamentos-service.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carros_service_carros_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__escolha_escolha__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_carro_dao_carro_dao__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_location_tracker_location_tracker__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let HomePage = class HomePage {
    constructor(navCtrl, _loadingCtrl, _alertCrtol, _carrosService, locationTracker, _carroDAO) {
        this.navCtrl = navCtrl;
        this._loadingCtrl = _loadingCtrl;
        this._alertCrtol = _alertCrtol;
        this._carrosService = _carrosService;
        this.locationTracker = locationTracker;
        this._carroDAO = _carroDAO;
    }
    ionViewDidLoad() {
        //this.buscaInformacoes();
        //this.locationTracker.startTracking();
    }
    reloadAll() {
        this.buscaInformacoesOffline();
    }
    reloadLess() {
        //this.buscaInformacoes();
    }
    buscaInformacoes() {
        this.carros = [];
        this.start = new Date().getTime();
        this.loading = this._loadingCtrl.create({
            content: 'Aguarde o carregamento dos carros'
        });
        this.loading.present();
        this._carrosService.lista100Itens()
            .subscribe((carros) => {
            this.carros = carros;
            //this.processarCarros(carros);
            this.loading.dismiss();
            console.log('Tempo de execução em milisegundos da busca dos carros: ' + (new Date().getTime() - this.start));
        }, (err) => {
            console.log(err);
            this.loading.dismiss();
            this._alertCrtol.create({
                title: 'Falha na conexão',
                subTitle: 'Não foi possível carregar a lista de carros',
                buttons: [
                    { text: 'Ok' }
                ]
            }).present();
        });
    }
    buscaInformacoesOffline() {
        this.carros = [];
        this.start = new Date().getTime();
        this.loading = this._loadingCtrl.create({
            content: 'Aguarde o carregamento dos carros offline'
        });
        this.loading.present();
        this._carrosService.lista1000Itens()
            .subscribe((carros) => {
            //this.carros = carros;
            this.processarCarros(carros);
        }, (err) => {
            console.log(err);
            this.loading.dismiss();
            this._alertCrtol.create({
                title: 'Falha na conexão',
                subTitle: 'Não foi possível carregar a lista de carros',
                buttons: [
                    { text: 'Ok' }
                ]
            }).present();
        });
    }
    processarCarros(carros) {
        this._carroDAO.removeAll()
            .subscribe(() => {
            this.salvaCarros(carros);
        }, (err) => {
            console.log(err.message);
        });
    }
    salvaCarros(carros) {
        var itemsProcessed = 0;
        for (let car of carros) {
            this._carroDAO.salva(car)
                .subscribe(() => {
                console.log("teste");
                console.log("inseriu");
                console.log(itemsProcessed);
                console.log(carros.length);
                itemsProcessed++;
                if (itemsProcessed == carros.length) {
                    this.buscaCarros();
                }
            }, (err) => {
                console.log(err.message);
            });
        }
    }
    buscaCarros() {
        this._carroDAO.getAll()
            .then((result) => {
            this.carros = result;
            this.loading.dismiss();
            console.log('Tempo de execução em milisegundos da busca dos carros: ' + (new Date().getTime() - this.start));
        });
    }
    selecionaCarro(carro) {
        console.log(carro);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__escolha_escolha__["a" /* EscolhaPage */].name, {
            carroSelecionado: carro
        });
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\tcc2018ioniccar\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     App Ionic Tcc/2018\n    </ion-title>    \n    <ion-buttons *ngIf="!hideCreateButton" end>\n        <button (click)="reloadAll()"><ion-icon name="cloud-download"></ion-icon></button>\n        <button (click)="reloadLess()"><ion-icon name="refresh"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list> \n\n  <ion-item *ngFor="let carro of carros" (click)="selecionaCarro(carro)">\n      <h2>{{carro.nome}}</h2>\n      <p>R${{carro.preco}} - Número de portas : {{carro.numeroPortas}} </p>\n    </ion-item>\n  </ion-list>  \n\n</ion-content>\n'/*ion-inline-end:"D:\tcc2018ioniccar\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_carros_service_carros_service__["a" /* CarrosServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_location_tracker_location_tracker__["a" /* LocationTracker */],
        __WEBPACK_IMPORTED_MODULE_4__providers_carro_dao_carro_dao__["a" /* CarroDaoProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CarrosServiceProvider = class CarrosServiceProvider {
    constructor(_http) {
        this._http = _http;
    }
    lista1000Itens() {
        console.log("teste");
        //return  this._http.get<Carro[]>('http://www.mocky.io/v2/5b855f9a3000009b247292b5');
        //return  this._http.get<Carro[]>('http://demo5138309.mockable.io/');
        //return  this._http.get<Carro[]>('http://www.mocky.io/v2/5b9910203200008d0013fb9a')
        return this._http.get('http://demo1480582.mockable.io/');
    }
    //json sem o retorno do número de portas
    //http://www.mocky.io/v2/5b906e6d2e0000af28a89eb8
    lista100Itens() {
        console.log("teste");
        return this._http.get('http://www.mocky.io/v2/5b9910203200008d0013fb9a');
    }
};
CarrosServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], CarrosServiceProvider);

//# sourceMappingURL=carros-service.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarroDaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let CarroDaoProvider = class CarroDaoProvider {
    constructor(_storage, datepipe) {
        this._storage = _storage;
        this.datepipe = datepipe;
    }
    removeAll() {
        let promise = this._storage.clear();
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(promise);
    }
    salva(carro) {
        let chave = this._geraChave(carro);
        let promise = this._storage.set(chave, carro);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(promise);
    }
    _geraChave(carro) {
        return carro.nome + this.datepipe.transform(new Date(), "ddMMyyyyHHmmss") + Math.random();
    }
    getAll() {
        let carros = [];
        return this._storage.forEach((value, key, iterationNumber) => {
            carros.push(value);
        })
            .then(() => {
            return Promise.resolve(carros);
        })
            .catch((error) => {
            return Promise.reject(error);
        });
    }
};
CarroDaoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('carroStorage')),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
], CarroDaoProvider);

//# sourceMappingURL=carro-dao.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTracker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LocationTracker = class LocationTracker {
    constructor(zone, backgroundGeolocation, geolocation) {
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.lat = 0;
        this.lng = 0;
    }
    startTracking() {
        // Background Tracking
        let config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 2000
        };
        this.backgroundGeolocation.configure(config).subscribe((location) => {
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            // Run update inside of Angular's zone
            this.zone.run(() => {
                this.lat = location.latitude;
                this.lng = location.longitude;
            });
        }, (err) => {
            console.log(err);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        let options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter((p) => p.code === undefined).subscribe((position) => {
            console.log(position);
            // Run update inside of Angular's zone
            this.zone.run(() => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        });
    }
    stopTracking() {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    }
};
LocationTracker = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
], LocationTracker);

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__camera_camera__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let CadastroPage = class CadastroPage {
    constructor(navCtrl, navParams, _agendamentosService, _agendamentoDAO, _alertCtrl, geolocation, camera, _localNotification) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._agendamentosService = _agendamentosService;
        this._agendamentoDAO = _agendamentoDAO;
        this._alertCtrl = _alertCtrl;
        this.geolocation = geolocation;
        this.camera = camera;
        this._localNotification = _localNotification;
        this.nome = '';
        this.endereco = '';
        this.email = '';
        this.data = new Date().toISOString();
        this.carro = this.navParams.get('carroSelecionado');
        this.precoTotal = this.navParams.get('precoTotal');
    }
    openPhoto() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__camera_camera__["a" /* CameraPage */].name);
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CadastroPage');
    }
    agenda() {
        if (!this.nome || !this.endereco || !this.email) {
            this._alertCtrl.create({
                title: 'Preenchimento obrigatório',
                subTitle: 'Preencha todos os campos',
                buttons: [
                    { text: 'Ok'
                    }
                ]
            }).present();
            return;
        }
        let options = { timeout: 10000, enableHighAccuracy: true, maximumAge: 3600 };
        console.log('vai buscar lats');
        this.start = new Date().getTime();
        this.geolocation.getCurrentPosition(options).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            //console.log('Tempo de execução em milisegundos da busca dos carros: ' + ( new Date().getTime() - this.start));                      
            console.log('achou');
            console.log(resp.coords.latitude + ' - ' + resp.coords.longitude);
            this.start = new Date().getTime();
            this._localNotification.schedule({
                id: 1,
                title: 'Geolocal',
                text: "Latitude: " + resp.coords.latitude + " Long : " + resp.coords.longitude,
                data: { teste: "teste" }
            });
            console.log('Tempo de execução em milisegundos da busca dos carros: ' + (new Date().getTime() - this.start));
        }).catch((error) => {
            console.log('erro');
            console.log('Error getting location', error);
        });
        /*let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
         console.log(data.coords.latitude + ' - ' + data.coords.longitude);
         // data can be a set of coordinates, or an error (if an error occurred).
         // data.coords.latitude
         // data.coords.longitude
        });*/
        /*let agendamento : Agendamento = {
          nomeCliente : this.nome,
          enderecoCliente : this.endereco,
          emailCliente : this.email,
          modeloCarro: this.carro.nome,
          precoTotal: this.precoTotal,
          confirmado : false,
          enviado : false,
          data: this.data
        };
    
        this._alerta = this._alertCtrl.create({
          title: 'Aviso',
          buttons:[
            { text: 'Ok',
              handler : ()=>{
                this.navCtrl.setRoot(HomePage)
              }
            }
          ]
        });
    
        let mensagem = '';
    
        this._agendamentoDAO.ehDuplicado(agendamento)
          .mergeMap(ehDuplicado => {
            if(ehDuplicado){
              throw new Error('Agendamento existente');
            }
            return this._agendamentosService.agenda(agendamento);
          })
          .mergeMap((valor)=> {
            let observable = this._agendamentoDAO.salva(agendamento)
            if(valor instanceof Error){
                throw valor;
            }
            return observable;
          })
          .finally(
            ()=>{
              this._alerta.setSubTitle(mensagem);
              this._alerta.present();
            }
          )
          .subscribe(
            ()=> {
            mensagem = 'Agendamento realizado';
            },
            (err : Error)=> {
              mensagem = err.message;
            }
          );*/
    }
};
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-cadastro',template:/*ion-inline-start:"D:\tcc2018ioniccar\src\pages\cadastro\cadastro.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2>{{carro.nome}}</h2>\n  <p>{{precoTotal}}</p>\n\n  <form (ngSubmit)="agenda()" #formulario="ngForm">\n    <ion-item>\n      <ion-label stacked>\n        Nome:\n      </ion-label>\n      <ion-input [(ngModel)]="nome" name="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>\n          Endereço:\n        </ion-label>\n        <ion-input [(ngModel)]="endereco" name="endereco"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked>\n            Email:\n          </ion-label>\n          <ion-input [(ngModel)]="email" name="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>\n              Data:\n            </ion-label>\n            <ion-datetime [(ngModel)]="data" name="data" displayFormat="DD/MM/YY"></ion-datetime>\n          </ion-item>\n  </form>\n\n  <ion-content padding>\n    <button ion-button color="dark" (click)="openPhoto()">Capturar Imagem</button>\n    </ion-content>\n\n  <ion-fab top right edge>\n      <button ion-fab (click)="formulario.ngSubmit.emit()">\n        <ion-icon name="arrow-dropright"></ion-icon>\n      </button>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\tcc2018ioniccar\src\pages\cadastro\cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_0__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], CadastroPage);

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(114);
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
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let CameraPage = class CameraPage {
    constructor(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CameraPage');
    }
    takePhoto() {
        this.camera.getPicture().then((imageData) => {
            this.imageURL = imageData;
        }, (err) => {
            console.log(err);
        });
    }
};
CameraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-camera',template:/*ion-inline-start:"D:\tcc2018ioniccar\src\pages\camera\camera.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Câmera</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n    <ion-content padding>\n        <button ion-button color="dark" (click)="takePhoto()">Take Photo</button>\n        <img [src]="imageURL" *ngIf="imageURL" />\n    </ion-content>\n\n</ion-content>\n'/*ion-inline-end:"D:\tcc2018ioniccar\src\pages\camera\camera.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CameraPage);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let EscolhaPage = class EscolhaPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carro = this.navParams.get('carroSelecionado');
        this.acessorios = [
            { nome: 'Freio ABS', preco: 800 },
            { nome: 'Ar-cond', preco: 400 },
            { nome: 'MP3', preco: 2800 }
        ];
        this._precoTotal = this.carro.preco;
    }
    get precoTotal() {
        return this._precoTotal;
    }
    atualizaTotal(ativado, acessorio) {
        ativado ?
            this._precoTotal += acessorio.preco :
            this._precoTotal -= acessorio.preco;
    }
    avancaCadastro() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* CadastroPage */].name, {
            carroSelecionado: this.carro,
            precoTotal: this.precoTotal
        });
    }
};
EscolhaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-escolha',template:/*ion-inline-start:"D:\tcc2018ioniccar\src\pages\escolha\escolha.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escolha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides pager="true">\n\n    <ion-slide *ngFor="let foto of carro.fotos">\n      <img src="{{foto}}">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">\n      <ion-icon name="car"></ion-icon>\n      VEÍCULO\n    </ion-item-divider>\n    <ion-item>{{carro.nome}}</ion-item>\n    <ion-item>{{carro.preco}}</ion-item>\n</ion-item-group>\n\n<ion-item-group>\n\n  <ion-item-divider color="light">\n    <ion-icon name="options"></ion-icon>\n    ACESSÓRIOS\n  </ion-item-divider>\n  <ion-item *ngFor="let acessorio of acessorios">\n    <ion-label>\n        <h2>{{acessorio.nome}}</h2>\n        <h4>{{acessorio.preco}}</h4>\n    </ion-label>\n    <ion-toggle #toggle color="secondary" (ionChange)="atualizaTotal(toggle.checked, acessorio)">\n\n    </ion-toggle>\n  </ion-item>\n</ion-item-group>\n\n\n<ion-item-divider color="light">\n  <span item-right>TOTAL : R$ {{precoTotal}}</span>\n</ion-item-divider>\n  \n<ion-fab top right edge>\n  <button ion-fab (click)="avancaCadastro()">\n    <ion-icon name="arrow-dropright"></ion-icon>\n  </button>\n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\tcc2018ioniccar\src\pages\escolha\escolha.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], EscolhaPage);

//# sourceMappingURL=escolha.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(280);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_carros_service_carros_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_do__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_mergeMap__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_catch__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_fromPromise__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_observable_of__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_carro_dao_carro_dao__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_local_notifications__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_background_mode__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_location_tracker_location_tracker__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_background_geolocation__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// PRIMEIRO PROVIDER, PARA agendamentos
function provideStorage1() {
    return new __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* Storage */]({
        name: 'tcc2018',
        storeName: 'agendamentos'
    });
}
// SEGUNDO PROVIDER, para carros
function provideStorage2() {
    return new __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* Storage */]({
        name: 'tcc2018',
        storeName: 'carros'
    });
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/escolha/escolha.module#EscolhaPageModule', name: 'EscolhaPage', segment: 'escolha', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_carros_service_carros_service__["a" /* CarrosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_19__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_carro_dao_carro_dao__["a" /* CarroDaoProvider */],
            __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            { provide: 'agendamentoStorage', useFactory: provideStorage1 },
            { provide: 'carroStorage', useFactory: provideStorage2 },
            __WEBPACK_IMPORTED_MODULE_24__providers_location_tracker_location_tracker__["a" /* LocationTracker */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\tcc2018ioniccar\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\tcc2018ioniccar\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.js.map