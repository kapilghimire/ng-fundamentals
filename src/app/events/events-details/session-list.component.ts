import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared";

@Component({
  templateUrl:`./session-list.component.html`,
  selector:'session-list'
})
export class SessionListComponent implements OnChanges{


  @Input() sessions:ISession[] | undefined=[];
  @Input() filterBy!:string
  visibleSessions: ISession[] = [];

  /*  what is this method with SimpleChanges
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
   */

  ngOnChanges(): void {
    if(this.sessions){
      this.filterSessions(this.filterBy);
    }
  }
  filterSessions(filterBy: string) {
    if(filterBy == 'all'){
       this.visibleSessions = this.sessions!.slice(0);
    }else{
      this.visibleSessions = this.sessions!.filter(s=>s.level.toLocaleLowerCase()===filterBy);
    }
  }
}
