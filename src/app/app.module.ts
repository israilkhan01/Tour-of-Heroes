import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// this ngModule decorator used to add critical metadata
@NgModule({
  declarations: [  //declares all application components.
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [     //list of external module that my app needs
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    //The forRoot() configuration method takes an InMemoryDataService class 
    //that primes the in-memory database.
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
