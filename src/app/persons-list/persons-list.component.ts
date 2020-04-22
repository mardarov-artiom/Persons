import { Component, OnInit } from '@angular/core';
import { PersonSerivce } from '../services/persons.service';
import { Person } from '../services/persons.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit {
  persons: Person[] = [];
  constructor(private personsService: PersonSerivce) {}

  ngOnInit(): void {
    this.persons = this.personsService.persons;
  }

  handlePersonSelection(person) {
    this.personsService.setPerson(person);
  }
}
