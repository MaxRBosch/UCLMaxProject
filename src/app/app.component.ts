import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { IonicStorageModule } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
      private router: Router

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/homepage',
      icon: 'assets/icon/graph_2.svg'
    },{
      title: 'Bitcoin',
      url: '/btc',
      icon: "assets/icon/btc.svg"
    },
    {
      title: 'Etherium',
      url: '/eth',
      icon: 'assets/icon/eth.svg'
    },
    {
      title: 'Predictions',
      url: '/predictions',
      icon: 'assets/icon/predictions.svg'
    }
    // ,
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'heart'
    // }
    ,
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    //   icon: 'trash'
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

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
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
