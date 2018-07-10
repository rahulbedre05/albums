import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { users } from './component/users.component';
import { myservices } from './services/myservices';
import { photos } from './component/photos.component';
import { albums } from './component/albums.component';
import { myRoute } from './route.config';


 
@NgModule({
  declarations: [
    AppComponent,users,photos,albums
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot(myRoute)
    
  ],
  providers: [myservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
