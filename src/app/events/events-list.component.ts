import { Component,OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
  events: any;

  constructor(private eventService : EventService,private toastrServie:ToastrService,private route:ActivatedRoute){

  }
  ngOnInit(){
    /* Not Required we will use route resolver to get events data
     this.eventService.getEvents().subscribe(
      events=>this.events=events,
     ); */

     this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName:string){
    this.toastrServie.success(eventName);
  }
}
