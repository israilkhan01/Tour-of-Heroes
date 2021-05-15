import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor( private http: HttpClient,private messageService: MessageService) { }

  // get hero data from anywhere—a web service, local storage, or a mock data source.
  // getHeroes(): Hero[] {
  //   console.log("ss4")
  //   return HEROES;
  // }
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }
  // Log a HeroService message with the MessageService 


  private log(message: string) {
    console.log("private -log");
    this.messageService.add(`HeroService: ${message}`);
  }
  //Notice that you keep injecting the MessageService but since you'll call it so frequently,
  //wrap it in a private log() method:

//Here base is the resource to which requests are made,
//and collectionName is the heroes data object in the in-memory-data-service.ts.
  private heroesUrl = 'api/heroes';  // URL to web api
    /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.add('HeroService: fetched heroes');
  //   return heroes;
  // }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
