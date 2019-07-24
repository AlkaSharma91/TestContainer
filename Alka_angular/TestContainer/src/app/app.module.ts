import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommonComponent } from './common/common.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import{HttpClientModule}from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommonComponent,
    AComponent,
    BComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
