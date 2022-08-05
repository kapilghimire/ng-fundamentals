import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map } from "rxjs";
import { EventService } from "./shared/event.service";

@Injectable()
export class EventListResolver implements Resolve<any>{
  constructor(private eventService:EventService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // we want to return observable show that angular can watch observable
      return this.eventService.getEvents().pipe(map(events =>events))
  }
}
