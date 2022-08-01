import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
favLinks = 'These are my favorite links!.';
  link1 = 'https://www.bbc.com/';
  link2 = 'https://store.steampowered.com/';
  link3 = 'https://www.nexusmods.com/';
  constructor() { }

  ngOnInit() {
  }

}
