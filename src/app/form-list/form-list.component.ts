import { Component, OnInit } from '@angular/core';
import {FormServiceClient} from "../services/form.service.client";

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  constructor(private formService: FormServiceClient) { }

  forms = [];
  ngOnInit() {
    this.formService.findAllForms()
      .then(forms => this.forms = forms);
  }

}
