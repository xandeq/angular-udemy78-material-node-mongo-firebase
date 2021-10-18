import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1:string = '123';
  name2:string = 'abc';

  client = {
    firstName: 'Alexandre',
    lastName: 'Queiroz',
    age: 34,
    address: 'Rua S PAulo'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
