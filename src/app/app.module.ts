import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { ChildComponent } from './child/child.component';
import { SharingDataService } from './sharing-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    SharingDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
