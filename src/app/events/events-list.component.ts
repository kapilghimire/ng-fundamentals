import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  template: `
  <div>
   <h1>Upcomming Angular Events</h1>
   <hr>
   <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)"  [event]="event1"></event-thumbnail>
   <h2>{{thumbnail.someProperty}}</h2>
   <button class="btn btn-primary" (click)="thumbnail.logFoo()"> me some foo</button>
 </div>`
})
export class EventListComponent {


  event1 = {
    id: 1,
    name: 'Agular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  handleEventClicked(data:any){
    console.log('recevied: ', data)
  }
}
