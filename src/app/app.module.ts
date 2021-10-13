import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
 declarations: [AppComponent, StringInterpolationComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent],
 imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule,
  MatIconModule, MatCardModule, MatInputModule, MatProgressSpinnerModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
