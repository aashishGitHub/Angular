import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { AppClassSelectorComponent } from './app-types-of-selector.component/app-class-selector.component';
import { AppAttributeSelectorComponent } from './app-types-of-selector.component/app-attribute-selector.component';
import { ParentChildComponentComponent } from './parent-component/parent-child-component/parent-child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    AppClassSelectorComponent,
    AppAttributeSelectorComponent,
    ParentChildComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
