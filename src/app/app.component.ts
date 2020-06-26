import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', { static: true }) testForm: NgForm;
  defaultQuestion = '';
  answer = '';
  genders = ['male', 'female'];


  clearForm() {
    this.testForm.setValue({
      userData: {
        username: '',
        email: ''
      },
      secret: '',
      answer: '',
      gender: null
    });
  }

  onSubmit() {
    console.log(this.testForm);
  }
}
