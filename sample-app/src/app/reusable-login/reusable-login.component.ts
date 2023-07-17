import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-login',
  templateUrl: './reusable-login.component.html',
  styleUrls: ['./reusable-login.component.css']
})
export class ReusableLoginComponent {

  @Input() title:string=""
  @Input() user_label:string=""
  @Input() pswrd_label:string=""


  @Output() emitter=new EventEmitter()
 

  login(user_name:string){

  this.emitter.emit(user_name)
  
  }
  

}
