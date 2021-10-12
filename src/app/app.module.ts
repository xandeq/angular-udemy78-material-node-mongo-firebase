import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

@NgModule({
 declarations: [AppComponent, StringInterpolationComponent, StringInterpolationComponent],
 imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
