import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { MessagesComponent } from './Components/messages/messages.component';


// this ngModule decorator used to add critical metadata
@NgModule({
  declarations: [  //declares all application components.
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [     //list of external module that my app needs
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
