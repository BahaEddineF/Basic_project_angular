import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-from',
  imports: [FormsModule],
  templateUrl: './template-from.component.html',
  styleUrl: './template-from.component.css'
})
export class TemplateFromComponent {

  userObj: any ={
    firstName: '',
    lastName: '',
    username:'',
    city:'',
    state:'',
    zipcode:'',
    isTermsAgreed:''
  }

  onSave(){

    const formValue = this.userObj;
    debugger;
  }
}
