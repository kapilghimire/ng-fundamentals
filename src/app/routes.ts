import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/events-details/event-details.component";
import { EventListComponent } from "./events/events-list.component";

export const appRoutes:Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo:'/events', pathMatch:'full'}
]
