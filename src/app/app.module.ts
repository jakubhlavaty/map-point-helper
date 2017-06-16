import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateEditorComponent } from './template-editor/template-editor.component';
import { AgmCoreModule } from '@agm/core';
import { PointMapComponent } from './point-map/point-map.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateEditorComponent,
    PointMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5ZEF3dFpGtq6q2Ze7CR69JiVZ4Rh9Cjg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
