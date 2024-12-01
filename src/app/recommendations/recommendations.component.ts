import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})

export class RecommendationsComponent implements OnInit {



  showMoreInfo: boolean = false; // Initially set to false
  dropdownList: { item_id: number; item_text: string }[] = []; // Specify the type
  selectedItems: { item_id: number; item_text: string }[] = [];
  dropdownSettings: IDropdownSettings = {}; // Type is already defined by the library


  danceability: number = 50;
  energy: number = 50;
  instrumentalness: number = 50;
  valence: number = 50;
  playlistName: string = '';

  recommendedTracks: any[] = [];

  constructor(private spotifyServices: SpotifyService){}

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'acoustic' },
      { item_id: 2, item_text: 'afrobeat' }
    ];
    this.selectedItems = [
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }


  async onGenerateRecommendation() {
    const token = localStorage.getItem('token');
    if(!!token){
      this.spotifyServices.defineAccessToken(token);

    const playlist  = await this.spotifyServices.getRecommendations()

    if (playlist){
      this.recommendedTracks = playlist.musicas.map(musica => ({
        name: musica.titulo,
        artists: musica.artistas?.map(artista => artista.nome) || [],
        album: musica.album || { imagemUrl: '', nome: '' }
      }));
    }
  }
}

  createPlaylist(){
    return '';
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}



