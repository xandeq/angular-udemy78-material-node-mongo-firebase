import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
 selector: 'app-event-binding',
 templateUrl: './event-binding.component.html',
 styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
 buttonName = 'My Button';
 i = 0;
 mode: ProgressSpinnerMode = 'indeterminate';
 color = 'primary';
 value = 100;
 btnEnable = true;
 selectDisabled = false;
 selectedOption = '';

 constructor() {}

 ngOnInit(): void {}

 save() {
  console.log('Click SAVE');
 }

 inc() {
  this.i++;
  this.buttonName = 'My Button was clicked ' + this.i + ' times';
 }

 disable() {
  this.btnEnable = false;
  this.mode = 'indeterminate';

  setTimeout(() => {
   this.btnEnable = true;
   this.mode = 'determinate';
  }, 3000);
 }

 cbChange(event: any) {
  console.log(event.checked)
  this.selectDisabled = event.checked;
 }

 selectionChange(event: any) {
  this.selectedOption = event.value;
  console.log('this.selectedOption = ', this.selectedOption)
 }
}
