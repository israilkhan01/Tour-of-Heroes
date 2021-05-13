import { Component, OnInit } from '@angular/core';
import {Hero} from '../../Hero';
import {HEROES} from '../../mock-heroes';
import { HeroService } from '../../hero.service';
import {MessageService} from '../../message.service';
// decorative specifies angular metadata
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  // heroes = HEROES;
  selectedHero?:Hero;

  //Create a method to retrieve the heroes from the service.
  // getHeroes(): void {
  //   console.log("ss2")
  //   this.heroes = this.heroService.getHeroes();
  //   //method has a synchronous signature, 
  //   console.log("ss3")
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
    
  }
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.add('HeroService: fetched heroes');
  //   return heroes;
  // }
  constructor(private heroService: HeroService, private messageService: MessageService) { 

  }

  ngOnInit(): void {
    // let Angular call ngOnInit() at an appropriate 
    //time after constructing a HeroesComponent instance.
    console.log("ss")
    this.getHeroes();
  }
  onSelect(hero:Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id} Name=${hero.name}`);
    console.log(hero)
  }
  // The ngOnInit() is a lifecycle hook.
  //  Angular calls ngOnInit() shortly after creating a component. 
  // It's a good place to put initialization logic.
}
