import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  validateEmail(): boolean {
    return false;
  }

  validatePassword(): boolean {
    return false;
  }

}
