import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {


  
  submitForm(){

    console.log(this.signUpForm.value)
    
  }
  signUpForm = new FormGroup(
    {
      fname : new FormControl('' ,[Validators.required, Validators.pattern('[A-Z a-z]{1,32}')] ),


      email : new FormControl('',[Validators.required, Validators.pattern('^[a-z A-Z0-9!#.$%^&*-]+@[a-z0.9.-]+\\.[a-z]{2,4}$')]),


      phone : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10,13}')]),



      gender : new FormControl(),


      username : new FormControl('',[Validators.required, Validators.pattern('')]),



      password : new FormControl('',[Validators.required, Validators.minLength(8)])



    }

  )
  get firstName(){

    return this.signUpForm.get('fname')
  }

  get emailId(){

    return this.signUpForm.get('email')
  }

  get phoneNumber(){

    return this.signUpForm.get('phone')
  }

  get genderId(){

    return this.signUpForm.get('gender')
  }

  get uName(){

    return this.signUpForm.get('username')
  }


  get psWrd(){
    return this.signUpForm.get('password')
  }

}
