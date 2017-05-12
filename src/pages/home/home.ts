import { PeopleService } from './../../providers/people-service';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.html',
  providers: [
    PeopleService
  ]
})

export class HomePage {
  public people: any;
  constructor(public peopleService: PeopleService) {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.load()
      .then(data => {
        this.people = data;
      });
  }

}
