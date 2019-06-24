import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  isEmailValid: boolean = true;
  isPasswordValid: boolean = true;
  emailValidationErrorMsg: string = "";
  passwordValidationErrorMsg: string = "";

  constructor() { }

  ngOnInit() {
  }

  validateEmail(): boolean {
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!this.email) {
      this.emailValidationErrorMsg = "Email is required."
      return this.isEmailValid = false;
    }
    if (!validEmailRegEx.test(this.email)) {
      this.emailValidationErrorMsg = "Entered email is invalid."
      return this.isEmailValid = false;
    }
    this.emailValidationErrorMsg = null;
    return this.isEmailValid = true;
  }

  validatePassword(): boolean {
    if(!this.password){
      this.passwordValidationErrorMsg = "Password is required."
      return this.isPasswordValid = false;
    } 
    if(this.password.length < 8) {
      this.passwordValidationErrorMsg = "Password needs to have at least 8 characters."
      return this.isPasswordValid = false;
    }
    this.passwordValidationErrorMsg;
    return this.isPasswordValid = true;
  }

  sendLoginRequest() {
    let emailValidation = this.validateEmail();
    let passwordValidation = this.validatePassword();
    if(emailValidation && passwordValidation) {
      console.log(this.email);
      console.log(this.password);
      alert("sending login request!");
    }
  }

}
