import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string = 'accent';
  disabled: boolean = true;
  colors = ['primary', 'secondary', 'warn', 'info', 'success'];
  idx = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      this.idx = (this.idx+1) % this.color.length;
      console.log('entrou')
    }, 111000)
  }

}
