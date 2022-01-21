import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data:any=[]

  onSubmit(mydata:string){
    console.log(mydata)
    const jsonData = JSON.stringify(mydata)
    localStorage.setItem('mydata',jsonData)
  }


}
