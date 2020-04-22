import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonSerivce } from '../services/persons.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  isFormOpen: boolean;
  form: FormGroup;

  constructor(public personService: PersonSerivce) {}

  ngOnInit(): void {
    this.personService.isFormOpen.subscribe(
      (value) => (this.isFormOpen = value)
    );

    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  handlePersonForm() {
    this.personService.toggleForm();
  }

  submitPerson() {
    this.personService.addPerson(this.form.value);
    this.personService.toggleForm();
    this.form.reset();
  }
}
