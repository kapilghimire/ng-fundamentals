import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared";

@Component({
  templateUrl:`./session-list.component.html`,
  selector:'session-list'
})
export class SessionListComponent implements OnChanges{


  @Input() sessions:ISession[] | undefined=[];
  @Input() filterBy!:string
  @Input() sortBy!:string
  visibleSessions: ISession[] = [];

  /*  what is this method with SimpleChanges
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
   */

  ngOnChanges(): void {
    if(this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort
            (sortByNameAsc):this.visibleSessions.sort(sortByVotesDesc)
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

function sortByNameAsc(s1:ISession,s2:ISession){
  if(s1.name > s2.name)
    return 1
  else if( s1.name === s2.name)
    return 0
  else
    return -1
}

function sortByVotesDesc(s1:ISession,s2:ISession){
  return s2.voters.length - s1.voters.length;
}
