import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventEmitter } from  '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  myForm: FormGroup;
  @Output('name') public name = new EventEmitter();
  fullName;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm=this.fb.group({
      fullName:['']
    })
  }
  save(){
    this.fullName=this.myForm.get('fullName').value;
    this.name.emit(this.fullName);
  
  }
}
