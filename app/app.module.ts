import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';

import { GitHubProfileComponent } from './github-profile.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, GitHubProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }