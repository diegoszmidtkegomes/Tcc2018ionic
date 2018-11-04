import { Acessorio } from './../../modelos/acessorio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../modelos/Carro';
import { CadastroPage } from '../cadastro/cadastro';

@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {

  public carro: Carro;
  public acessorios : Acessorio[];
  private _precoTotal : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.carro = this.navParams.get('carroSelecionado');
    this.acessorios = [
      {nome: 'Freio ABS', preco : 800},
      {nome: 'Ar-cond', preco : 400},
      {nome: 'MP3', preco : 2800}
    ];
    this._precoTotal = this.carro.preco;
  }
 
  get precoTotal(){
    return this._precoTotal;
  }

  atualizaTotal(ativado : boolean, acessorio: Acessorio){
    ativado ?
      this._precoTotal += acessorio.preco:
      this._precoTotal -=  acessorio.preco;
      }

  avancaCadastro(){
    this.navCtrl.push(CadastroPage.name, {
      carroSelecionado: this.carro, 
      precoTotal : this.precoTotal
    });
  }

}
