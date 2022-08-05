import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/events-details/event-details.component";
import { EventRouteActivator } from "./events/events-details/event-route-activator.service";
import { EventListComponent } from "./events/events-list.component";

export const appRoutes:Routes = [
  { path:'events/new', component: CreateEventComponent},
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailsComponent,
   canActivate:[EventRouteActivator] },
  {path: '404', component:Error404Component},
  { path: '', redirectTo:'/events', pathMatch:'full'}
]
