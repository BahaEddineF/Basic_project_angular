import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-reactive-from',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-from.component.html',
  styleUrl: './reactive-from.component.css',
  standalone: true
})

export class ReactiveFormComponent {

  userForm: FormGroup = new FormGroup({
    fName: new FormControl(""),
    lName: new FormControl(""),
    userName: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl("Tunis"),
    zip: new FormControl(""),
    isAgreed: new FormControl(false),
  })

  onUserSave(){
    const formValue = this.userForm.value;
  }

}
