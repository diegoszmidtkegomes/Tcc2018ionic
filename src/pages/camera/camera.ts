import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  private imageURL;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public camera :  Camera
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takePhoto(){
    this.camera.getPicture().then((imageData) => {
       this.imageURL = imageData
    }, (err) => {
       console.log(err);
    });
  }

}
