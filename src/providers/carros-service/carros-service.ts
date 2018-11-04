import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../../modelos/Carro';

@Injectable()
export class CarrosServiceProvider {

  constructor(private _http: HttpClient) {
  }

  lista1000Itens(){
    console.log("teste");
    //return  this._http.get<Carro[]>('http://www.mocky.io/v2/5b855f9a3000009b247292b5');
    //return  this._http.get<Carro[]>('http://demo5138309.mockable.io/');
    //return  this._http.get<Carro[]>('http://www.mocky.io/v2/5b9910203200008d0013fb9a')
    return  this._http.get<Carro[]>('http://demo1480582.mockable.io/');    
  }

  //json sem o retorno do número de portas
  //http://www.mocky.io/v2/5b906e6d2e0000af28a89eb8
  lista100Itens(){
    console.log("teste");
    return  this._http.get<Carro[]>('http://www.mocky.io/v2/5b9910203200008d0013fb9a');    
  }

}
