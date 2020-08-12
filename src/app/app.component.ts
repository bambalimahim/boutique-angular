import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBkC2_J81zqt3ZpIdv5nQhInKX_zucwzwY",
      authDomain: "boutique-angular.firebaseapp.com",
      databaseURL: "https://boutique-angular.firebaseio.com",
      projectId: "boutique-angular",
      storageBucket: "boutique-angular.appspot.com",
      messagingSenderId: "468493856723",
      appId: "1:468493856723:web:518c97e9898fe0fafb4926",
      measurementId: "G-FYK9RQJW4J"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
