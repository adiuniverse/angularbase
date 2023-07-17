import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';
  students =[
    {
      'name':'aditya'  ,   
      'age': 10,
      'address':'calicut',
      'phone':9876543211

    },
    {
      'name':'adiya'  ,   
      'age': 20,
      'address':'poonoor',
      'phone':9876543212

    }
  ]




  show_table = true
  //  show_table = false


  color = 'green'

  show_fontcolor = true

  show_class = false






  username = ' ramu'
  disabled_btn = true



  submit(text:string){
    console.log(text)
  }

  student_name = "somu"





  // font_size = "10"
  // font_color = "red"
  // font_family = "arial"
  // back_ground = "blue"


  today = Date.now();
  name = "Tom christy"

  amount = 5000
  student = ['prajisha','greeshma','nimisha','divya']
  special = "!@#$%^&*~"



  submitForm(formdata:NgForm){
    console.log(formdata)
  }

}





