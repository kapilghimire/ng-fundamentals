import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
   .container {
    padding-left:20px;
    padding-right:20px;
   }

   .event-image{
    hight:100px;
   }

   `]
})
export class EventDetailsComponent implements OnInit{
  event:any;
  constructor(private eventService: EventService,private route :ActivatedRoute){

  }
  ngOnInit(): void {
    this.event= this.eventService.getEvent(+this.route.snapshot.params['id'])
  }


}
