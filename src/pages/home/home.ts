import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, Loading } from 'ionic-angular';
import { Carro } from '../../modelos/Carro';
import { HttpErrorResponse} from '@angular/common/http';
import { CarrosServiceProvider } from '../../providers/carros-service/carros-service';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecyles';
import { EscolhaPage } from '../escolha/escolha';
import { CarroDaoProvider } from '../../providers/carro-dao/carro-dao';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {

  public carros: Carro [];
  private start;
  private loading : Loading;

  constructor(public navCtrl: NavController, 
              private _loadingCtrl : LoadingController, 
              private _alertCrtol :  AlertController,
              private _carrosService : CarrosServiceProvider,
              public locationTracker: LocationTracker,
              private _carroDAO : CarroDaoProvider) {}


     ionViewDidLoad(){     
     //this.buscaInformacoes();
     //this.locationTracker.startTracking();
    }

    reloadAll(){
      this.buscaInformacoesOffline();
    }

    reloadLess(){
      //this.buscaInformacoes();
    }

    buscaInformacoes(){
      this.carros = [];
      this.start = new Date().getTime();
      this.loading = this._loadingCtrl.create({
        content : 'Aguarde o carregamento dos carros'
      });

      this.loading.present();
      
      this._carrosService.lista100Itens()
                .subscribe(
                  (carros) => {
                    this.carros = carros;
                    //this.processarCarros(carros);
                    this.loading.dismiss();
                    console.log('Tempo de execução em milisegundos da busca dos carros: ' + ( new Date().getTime() - this.start));                      
            
                  },
                  (err : HttpErrorResponse) =>{
                      console.log(err);
                      this.loading.dismiss();
                      this._alertCrtol.create({
                        title : 'Falha na conexão', 
                        subTitle : 'Não foi possível carregar a lista de carros',
                        buttons : [
                          {text : 'Ok'}
                        ]
                    }).present();
                  }
                )
    }

    buscaInformacoesOffline(){
      this.carros = [];
      this.start = new Date().getTime();
      this.loading = this._loadingCtrl.create({
        content : 'Aguarde o carregamento dos carros offline'
      });

      this.loading.present();
      
      this._carrosService.lista1000Itens()
                .subscribe(
                  (carros) => {
                    //this.carros = carros;
                    this.processarCarros(carros);
                  },
                  (err : HttpErrorResponse) =>{
                      console.log(err);
                      this.loading.dismiss();
                      this._alertCrtol.create({
                        title : 'Falha na conexão', 
                        subTitle : 'Não foi possível carregar a lista de carros',
                        buttons : [
                          {text : 'Ok'}
                        ]
                    }).present();
                  }
                )
    }

    processarCarros(carros : Carro []){
      this._carroDAO.removeAll()
        .subscribe(
          ()=> {
            this.salvaCarros(carros);          
          },
          (err : Error)=> {
            console.log(err.message);
          }
        );
    }

    salvaCarros(carros : Carro []){
      var itemsProcessed : number  = 0;
      for (let car of carros) {
        this._carroDAO.salva(car)        
        .subscribe(
          ()=> {
            console.log("teste");
            console.log("inseriu");
            console.log(itemsProcessed);
            console.log(carros.length);
            itemsProcessed++;
            if(itemsProcessed == carros.length) {
              this.buscaCarros();         
            }
          },
          (err : Error)=> {
            console.log(err.message);
          }
        )        
        ;        
      }    
    }

    buscaCarros(){
      this._carroDAO.getAll()
      .then((result) => {
        this.carros = result;
        this.loading.dismiss();
        console.log('Tempo de execução em milisegundos da busca dos carros: ' + ( new Date().getTime() - this.start));                      
      });
    }

    selecionaCarro(carro: Carro){
        console.log(carro);
        this.navCtrl.push(EscolhaPage.name, {
          carroSelecionado : carro
        });
    }


}
