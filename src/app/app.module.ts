import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
