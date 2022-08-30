import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

/*manually imported modules below*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DragScrollModule } from 'ngx-drag-scroll';
import { PhotoComponent } from './components/photo/photo.component';
import { VideoComponent } from './components/video/video.component';
import { DesignComponent } from './components/design/design.component';
import { ArtComponent } from './components/art/art.component';
import { DiyComponent } from './components/diy/diy.component';
import { FoodComponent } from './components/food/food.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoComponent,
    VideoComponent,
    DesignComponent,
    ArtComponent,
    DiyComponent,
    FoodComponent,
    AboutComponent,
    ErrorComponent,
  ],
  imports: [ /*manually added imported modules below*/
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    DragScrollModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
