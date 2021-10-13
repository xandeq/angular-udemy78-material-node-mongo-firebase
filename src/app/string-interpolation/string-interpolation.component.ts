import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = 'John';
  person = {
    firstname: 'Lennon',
    lastname: 'Beatles',
    age: 32,
    address: 'Route 100'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
