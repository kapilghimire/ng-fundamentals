import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../shared";
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
  event:IEvent | undefined;
  constructor(private eventService: EventService,private route :ActivatedRoute){

  }
  ngOnInit(): void {
    this.event= this.eventService.getEvent(+this.route.snapshot.params['id'])
  }


}
