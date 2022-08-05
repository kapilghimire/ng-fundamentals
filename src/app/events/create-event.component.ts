import {Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  template:`
  <h2>New Event</h2>
  <hr>
  <div class="col-mod-6">
    <h3>[Create Event form will go there]</h3>
    <br>
    <br>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="submit" class="btn btn-default" (click)="cancel()")>Cancel</button>
  </div>
  `
})
export class CreateEventComponent{

  constructor (private router: Router){

  }
  cancel(){
    this.router.navigate(['/events'])
  }
}
