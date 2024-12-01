import { SpotifyService } from './../services/spotify.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent {

  constructor(private spotifyService: SpotifyService, private router: Router){}

  ngOnInit(): void {
    this.verifyTokenUrl()
  }

  verifyTokenUrl(){
    const token = this.spotifyService.getTokenUrlCallBack();
    if(!!token){
      this.spotifyService.defineAccessToken(token);
      this.router.navigate(['/recommendations']);
    }
  }

  login(){
      window.location.href = this.spotifyService.getLoginUrl();
  }
}
