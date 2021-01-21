import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertCtrl: AlertController) { }

  async show() {
    let alert = await this.alertCtrl.create({
      header:"Subscribe",
      subHeader:"Newsletter",
      message:"Please make sur to subscibe to our newletter. Thank you"
    });

    alert.present();
  }

}
