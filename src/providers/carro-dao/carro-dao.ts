import { Carro } from './../../modelos/Carro';
import { Injectable, Inject } from '@angular/core';
import { Storage } from '@ionic/storage'
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';


@Injectable()
export class CarroDaoProvider {
  constructor(@Inject('carroStorage') private _storage: Storage,
              private datepipe: DatePipe) {
    
  }

  removeAll(){
    let promise = this._storage.clear();
    return Observable.fromPromise(promise);
  }
  
  salva(carro: Carro){
    let chave = this._geraChave(carro);
    let promise = this._storage.set(chave, carro);
    return Observable.fromPromise(promise);
  }

  private _geraChave(carro : Carro){
    return carro.nome + this.datepipe.transform(new Date(), "ddMMyyyyHHmmss") + Math.random();
  }

  public getAll(){

    let carros: Carro[]= [];

    return this._storage.forEach((value: Carro, key: string, iterationNumber: Number) => {
      carros.push(value);
    })
      .then(() => {
        return Promise.resolve(carros);
      })
      .catch((error) => {
        return Promise.reject(error);
      });

  }

}
