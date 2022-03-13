import { Component, OnInit } from '@angular/core';
import { CharacterDetailsService } from 'src/app/services/character-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:CharacterDetailsService) { }
  characterData: any;
  ngOnInit(): void {
    this.characterData=this.service.characterDetails;
  }

}
