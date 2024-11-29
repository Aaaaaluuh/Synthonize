import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router) {}

  shouldShowNavBar(): boolean {
    // Esconde a navbar apenas na rota inicial ("/")
    return this.router.url !== '/';
  }

  ngOnInit() {
  }

}
