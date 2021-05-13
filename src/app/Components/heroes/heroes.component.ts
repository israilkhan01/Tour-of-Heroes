import { Component, OnInit } from '@angular/core';
import {Hero} from '../../Hero';
import {HEROES} from '../../mock-heroes';
// decorative specifies angular metadata
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes = HEROES;
  selectedHero?:Hero;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero:Hero){
    this.selectedHero = hero;
    console.log(hero)
  }
  // The ngOnInit() is a lifecycle hook.
  //  Angular calls ngOnInit() shortly after creating a component. 
  // It's a good place to put initialization logic.
}
