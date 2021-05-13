import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';

//The HeroService class is going to provide an injectable service,
// and it can also have its own injected dependencies.
//accepts a metadata object for the service, 
//the same way the @Component() decorator did for your component classes.
@Injectable({
  providedIn: 'root'
})
//registers a provider with the root injector for your service by 
//including provider metadata, that is providedIn: 
//'root' in the @Injectable() decorator.

export class HeroService {

  constructor() { }

  // get hero data from anywhere—a web service, local storage, or a mock data source.
  getHeroes(): Hero[] {
    return HEROES;
  }
}
