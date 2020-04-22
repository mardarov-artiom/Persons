import { Component } from '@angular/core';
import { PersonSerivce } from './services/persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public personService: PersonSerivce) {}

  handlePersonForm() {
    this.personService.toggleForm();
  }
}
