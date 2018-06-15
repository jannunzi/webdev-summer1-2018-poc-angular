import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {

  inputType = 'fillin';
  formElements = [];
  constructor() { }

  removeFormElement(element) {
    const index = this.formElements.indexOf(element);
    this.formElements.splice(index, 1);
  }

  addFormElement(inputType) {
    const formElement = {
      type: inputType
    };
    this.formElements.push(formElement);
  }

  ngOnInit() {
  }

}
