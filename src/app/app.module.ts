import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './myfirst.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyThirdComponent } from './my-second/my-third/my-third.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';


@NgModule({
 declarations: [AppComponent, MyFirstComponent, MySecondComponent, MyThirdComponent],
 imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatIconModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
