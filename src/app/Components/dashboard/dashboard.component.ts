import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/mock-heroes';
import {Hero} from '../../Hero'
import {HeroService} from '../../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Topheroes: Hero[] = [];

  constructor( private heroService:HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.Topheroes = heroes.slice(1, 5));
  }

}
