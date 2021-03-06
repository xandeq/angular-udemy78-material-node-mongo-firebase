import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

@NgModule({
 declarations: [AppComponent, StringInterpolationComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwoWayDataBindingComponent],
 imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatDividerModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
