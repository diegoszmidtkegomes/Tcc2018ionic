import { AgendamentoDaoProvider } from './../../providers/agendamento-dao/agendamento-dao';
import { HomePage } from './../home/home';
import { AgendamentosServiceProvider } from './../../providers/agendamentos-service/agendamentos-service';
import { Carro } from './../../modelos/Carro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Agendamento } from '../../modelos/Agendamento';
import {Storage} from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CameraPage } from '../camera/camera';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public carro: Carro;
  private start;
  private imageURL;

  public precoTotal : number;

  public nome : string = '';
  public endereco : string = '';
  public email : string = '';
  public data : string = new Date().toISOString();
  private _alerta: Alert;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _agendamentosService : AgendamentosServiceProvider,
              private _agendamentoDAO: AgendamentoDaoProvider,
              private _alertCtrl: AlertController,
              private geolocation: Geolocation,
              private camera: Camera,
              private _localNotification   : LocalNotifications

            ) {
    this.carro = this.navParams.get('carroSelecionado');
    this.precoTotal = this.navParams.get('precoTotal');
    
  }

  


  openPhoto(){
    this.navCtrl.push(CameraPage.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  agenda(){ 

    if(!this.nome || !this.endereco || !this.email){
        
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle : 'Preencha todos os campos',
        buttons:[
          { text: 'Ok'
          }
        ]
      }).present();

      return;
    }
    let options = {timeout: 10000, enableHighAccuracy: true, maximumAge: 3600};
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
        id     : 1,
        title  : 'Geolocal',
        text 	: "Latitude: " + resp.coords.latitude + " Long : " + resp.coords.longitude,
        data: {teste: "teste"}
     });
      console.log('Tempo de execução em milisegundos da busca dos carros: ' + ( new Date().getTime() - this.start));                      
      


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

  

}
