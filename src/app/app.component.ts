import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'tabs/tab1',
      icon: 'home'
    },
    {
      title: 'Photos',
      url: 'tabs/tab2',
      icon: 'images'
    },
    {
      title: 'Contacts',
      url: 'tabs/tab3',
      icon: 'mail'
    },
    {
      title: 'Statistiques',
      url: 'tabs/tab4',
      icon: 'analytics'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
}
  }
}
