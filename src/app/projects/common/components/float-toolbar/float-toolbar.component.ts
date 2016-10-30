import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonData } from './buttonData';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'float-toolbar',
  templateUrl: 'float-toolbar.component.html',
  styleUrls: ['float-toolbar.component.css']
})

export class FloatToolbar implements OnInit {
  firstInput: boolean = false;
  secondInput: boolean = false;
  thirdInput: boolean = false;
  registerForm: FormGroup;

  buttonData1: ButtonData = { title: 'first', isClicked: false };
  buttonData2: ButtonData = { title: 'second', isClicked: false };
  buttonData3: ButtonData = { title: 'third', isClicked: false };



  private searchStr: string;
  private dataService: CompleterData;
  private searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];



  constructor(private formBuilder: FormBuilder, private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ["title", Validators.required],
      comments: ["coments", Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      })
    });
  }

  onClick(data: ButtonData) {
    console.log(data);
    data.isClicked = !data.isClicked;
    switch (data.title) {
      case 'first':
        this.firstInput = !this.firstInput;
        break;
      case 'second':
        this.secondInput = !this.secondInput;
        break;
      case 'third':
        this.thirdInput = !this.thirdInput;
        break;
      default:
        break;
    }
  }
}