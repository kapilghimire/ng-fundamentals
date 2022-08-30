import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateSessionComponent } from "./events";
import { CreateEventComponent } from "./events/create-event.component";
import { EventListResolver } from "./events/event-list-resolver.service";
import { EventDetailsComponent } from "./events/events-details/event-details.component";
import { EventRouteActivator } from "./events/events-details/event-route-activator.service";
import { EventListComponent } from "./events/events-list.component";

export const appRoutes:Routes = [
  { path:'events/new', component: CreateEventComponent,
   canDeactivate:['canDeactivateCreateEvent']},
  { path: 'events', component: EventListComponent, resolve: {events: EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent,
   canActivate:[EventRouteActivator] },

   {path:'events/session/new',component: CreateSessionComponent},
  {path: '404', component:Error404Component},
  { path: '', redirectTo:'/events', pathMatch:'full'},
  {
    path:'user',
    loadChildren: () => import('./user/user.module')
       .then(m=>m.UserModule)
  }
]
