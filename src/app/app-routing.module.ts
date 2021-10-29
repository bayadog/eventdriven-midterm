import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {path: "profile", component: ProfileComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "contact", component: ContactComponent},
  {path: "**", redirectTo: "profile"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  