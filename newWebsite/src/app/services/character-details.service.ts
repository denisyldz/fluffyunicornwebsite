import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsService {

  constructor() { }

  characterDetails = [
    {
      id:1,
      characterName: "Deniz",
      characterLevel: 67,
      characterSkill: "Skill : Lovely",
      characterImg : "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80"
    },
    {
      id:2,
      characterName: "Berkan",
      characterLevel: 56,
      characterSkill: "Skill : Powerful",
      characterImg : "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id:3,
      characterName: "Emre",
      characterLevel: 34,
      characterSkill: "Skill : Sad",
      characterImg : "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
    },
    {
      id:4,
      characterName: "Sepehr",
      characterLevel: 78,
      characterSkill: "Skill : Smart",
      characterImg : "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
      id:5,
      characterName: "Melis",
      characterLevel: 84,
      characterSkill: "Skill : Cute",
      characterImg :"https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  
 ]
}
