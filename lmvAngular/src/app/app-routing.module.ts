import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PhotoComponent } from './components/photo/photo.component';
import { VideoComponent } from './components/video/video.component';
import { DesignComponent } from './components/design/design.component';
import { ArtComponent } from './components/art/art.component';
import { DiyComponent } from './components/diy/diy.component';
import { FoodComponent } from './components/food/food.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: 'photo', component: PhotoComponent},
  {path: 'video', component: VideoComponent},
  {path: 'design', component: DesignComponent},
  {path: 'art', component: ArtComponent},
  {path: 'diy', component: DiyComponent},
  {path: 'food', component: FoodComponent},
  {path: 'about', component: AboutComponent},

  /* home is default page */
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  /* 404 error page -- MUST BE LAST IN ARRAY */
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
