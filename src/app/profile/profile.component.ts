import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileName: String = "Fernando Ferreira Cunha";
  profileLocation: String = "São Paulo SP";
  followText: String = "Seguir";
  postsNumber = 0;

  contacts = [
    {
      "id": 1,
      "name": "Laura",
      "email": "lbutler0@latimes.com",
      "age": 47
    },
    {
      "id": 2,
      "name": "Walter",
      "email": "wkelley1@goodreads.com",
      "age": 37
    },
    {
      "id": 3,
      "name": "Walter",
      "email": "wgutierrez2@smugmug.com",
      "age": 49
    },
    {
      "id": 4,
      "name": "Jesse",
      "email": "jarnold3@com.com",
      "age": 47
    },
    {
      "id": 5,
      "name": "Irene",
      "email": "iduncan4@oakley.com",
      "age": 33
    },
    {
      "id": 6,
      "name": "Sua mãe",
      "email": "suamae@hotmail.com",
      "age": 70
    },
    {
      "id": 7,
      "name": "Renato",
      "email": "renatinho@fogoso.com",
      "age": 40
    }
  ];

  friendsNumber = this.contacts.length;

  innerWidth;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  followProfile() {
    if(this.followText == "Seguir") {
      this.followText = "Seguindo";
    } else {
      this.followText = "Seguir";
    }
  }

}
