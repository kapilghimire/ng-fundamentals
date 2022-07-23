import { Component,OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";

@Component({
  selector: 'events-list',
  template: `
  <div>
   <h1>Upcomming Angular Events</h1>
   <hr>
   <div class="row">
    <div  *ngFor = "let event of events" class="col-md-5">
      <event-thumbnail  [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
    </div>
   </div>

 </div>`
})
export class EventListComponent implements OnInit {
  events: any[]=[];

  constructor(private eventService : EventService,private toastrServie:ToastrService){

  }
  ngOnInit(){
    this.events= this.eventService.getEvents();
  }

  handleThumbnailClick(eventName:string){
    this.toastrServie.success(eventName);
  }
}
