import { Storage } from '@ionic/storage';
import { Agendamento } from './../../modelos/Agendamento';
import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class AgendamentoDaoProvider {

  constructor(@Inject('agendamentoStorage') private _agendamentoStorage: Storage ) {
  }

  private _geraChave(agendamento : Agendamento){
    return agendamento.emailCliente + agendamento.data.substr(0,10);
  }

  salva(agendamento: Agendamento){
    let chave = this._geraChave(agendamento);
    let promise = this._agendamentoStorage.set(chave, agendamento);
    return Observable.fromPromise(promise);
  }

  ehDuplicado(agendamento : Agendamento){
  let chave = this._geraChave(agendamento);
  let promise = this._agendamentoStorage.get(chave).then(
    dado => dado ? true  : false);
    return Observable.fromPromise(promise);
  }

}
