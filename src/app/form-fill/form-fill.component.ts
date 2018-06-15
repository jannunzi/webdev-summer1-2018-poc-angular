import { Component, OnInit } from '@angular/core';
import {FormServiceClient} from "../services/form.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-fill',
  templateUrl: './form-fill.component.html',
  styleUrls: ['./form-fill.component.css']
})
export class FormFillComponent implements OnInit {

  constructor(private formService: FormServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.loadForm(params['formId']))
  }

  form = {};
  loadForm(formId) {
    this.formService.findFormById(formId)
      .then(form => this.form = form);
  }

  ngOnInit() {
  }

}
