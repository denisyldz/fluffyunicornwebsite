import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDetailsService } from 'src/app/services/character-details.service';

@Component({
  selector: 'app-characterpage',
  templateUrl: './characterpage.component.html',
  styleUrls: ['./characterpage.component.css']
})
export class CharacterpageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:CharacterDetailsService) { }
  getCharacterId: any;
  menuData:any;

  ngOnInit(): void {
    this.getCharacterId =  this.param.snapshot.paramMap.get('id');
    console.log(this.getCharacterId,'getcharacter');
    if(this.getCharacterId)
    {
      this.menuData = this.service.characterDetails.filter((value)=>{
       return value.id == this.getCharacterId;
      });
      console.log(this.menuData,'menudata>>');
    }
  }

}
