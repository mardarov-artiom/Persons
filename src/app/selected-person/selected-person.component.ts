import { Component, OnInit } from '@angular/core';
import { PersonSerivce, Person } from '../services/persons.service';

@Component({
  selector: 'app-selected-person',
  templateUrl: './selected-person.component.html',
  styleUrls: ['./selected-person.component.scss'],
})
export class SelectedPersonComponent implements OnInit {
  public selected;
  constructor(public personsService: PersonSerivce) {}

  ngOnInit(): void {
    this.personsService.selectedPerson.subscribe(
      (person) => (this.selected = person)
    );
  }
}
