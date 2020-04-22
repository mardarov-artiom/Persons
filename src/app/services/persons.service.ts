import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Person {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female'; // sorry if it hurts someone
  email: string;
  phone: number;
}

@Injectable({
  providedIn: 'root',
})
export class PersonSerivce {
  public persons: Person[] = [
    {
      firstName: 'Foo',
      lastName: 'Bar',
      gender: 'male',
      email: 'foobar@gmail.com',
      phone: 1234567,
    },
  ];
  public isPersonSelected = false;
  public selectedPerson = new BehaviorSubject({});
  public isFormOpen = new BehaviorSubject<boolean>(false);

  public addPerson(person): void {
    this.persons.push(person);
  }

  public setPerson(person: Person): void {
    this.isPersonSelected = true;
    this.selectedPerson.next(person);
  }

  public toggleForm() {
    this.isFormOpen.next(!this.isFormOpen.value);
  }
}
