import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pictures';
  image1 = 'https://a-z-animals.com/media/2020/01/Snake-Blue-viper-768x401.jpg';
  image2 = 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg';
  image3 = 'https://www.cbc.ca/kids/images/chinaanimals_header.jpg';

  constructor() { }

  ngOnInit() {
  }

}