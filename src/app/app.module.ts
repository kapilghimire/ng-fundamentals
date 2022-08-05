import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';

import { EventsAppComponent } from './events-app.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import { EventListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,ToastrService,EventRouteActivator,
  {
    provide:'canDeactivateCreateEvent',
    useValue: checkDirtyState
  }

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have not saved this event, do you really want to cancel ?');

  return true;
}
