import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
// on déclare une propriété tableau vide au départ
photoList = [];

//on récupère notre service dans le constructeur
  constructor(private photoService: PhotosService) {}

  ngOnInit(){
    // on charge les données au démarage du composant
    this.photoList = this.photoService.data;
  }


  alert(id){
    alert(id);
  }
}
