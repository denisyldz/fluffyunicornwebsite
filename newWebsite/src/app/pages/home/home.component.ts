import { Component, OnInit } from '@angular/core';
import { CharacterDetailsService } from 'src/app/services/character-details.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: CharacterDetailsService) { }
  characterData: any;
  ngOnInit(): void {
    this.characterData = this.service.characterDetails;
  }

}
