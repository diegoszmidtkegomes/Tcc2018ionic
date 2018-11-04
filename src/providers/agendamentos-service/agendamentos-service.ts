import { Agendamento } from './../../modelos/Agendamento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AgendamentosServiceProvider {

  private _url = 'http://www.mocky.io/v2';

  constructor(private  _http: HttpClient) {

  }

  agenda(agendamento : Agendamento){
    return this._http.post(this._url+'/5b8560a73000009b247292bf', agendamento)
    .do(()=> agendamento.enviado =true)
    .catch( (err) => Observable.of(new Error('Erro ao criar agendamento')));
  }

}
