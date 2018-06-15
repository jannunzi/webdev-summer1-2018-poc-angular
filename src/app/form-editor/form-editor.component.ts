import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {

  inputType = 'text';
  formElements = [];
  constructor() { }

  addFormElement(inputType) {
    console.log(inputType);
    const formElement = {
      type: inputType
    };
    this.formElements.push(formElement);
  }

  ngOnInit() {
  }

}
