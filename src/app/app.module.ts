import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibTamoModule } from 'lib-tamo';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibTamoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
