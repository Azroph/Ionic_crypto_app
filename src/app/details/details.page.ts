import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  //on récup la route active pour le paramètre id
  // on récup notre photos service
  constructor(private activatedRoute:ActivatedRoute, private photoService: PhotosService) { }

  // on définit l'index du tableau de photos à zéro
  photoIndex = 0;
  // on déclare notre élément pour l'utiliser dans la page de détails
  photoDetails = this.photoService.data[ this.photoIndex ];

  ngOnInit() {
    this.activatedRoute.params.subscribe(( params) => {
     
      // on recherche l'index du tableau de photos correspondant à l'id récupéré
      // en paramètre
      this.photoIndex = this.photoService.data.findIndex( item => item.id === params.id );
      // on doit réaffecter les données de la photo correspondant à l'index
      this.photoService.data[ this.photoIndex ];
    });

  }

}
