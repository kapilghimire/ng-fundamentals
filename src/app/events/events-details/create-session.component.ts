import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, FormsModule, Validators } from "@angular/forms";
import { ISession, restrictWords } from "../shared";

@Component({
  templateUrl: './create-session.component.html',
  selector: 'create-session',
  styles:[`
     em {float:right; color: #E05C65; padding-left: 10px; }
    .error input, .error select, .error textarea {background-color: #E3C3C5;}
    .error :: -webkit-input-placeholder { color: #999; }
    .error :: -moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999};
  `]
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter()
  newSessionForm: FormGroup = new FormGroup('');
  name: FormControl = new FormControl('');
  duration: FormControl = new FormControl('');
  presenter: FormControl = new FormControl('');
  level: FormControl = new FormControl('');
  abstract: FormControl = new FormControl('');
  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictWords(['foo','bar'])]);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract:this.abstract
    })
  }
  saveSession(formValues:any ){
    console.log(formValues);
    let session: ISession ={
      id:0,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters:[]
    }

    console.log(session)

    this.saveNewSession.emit(session);
  }

}
