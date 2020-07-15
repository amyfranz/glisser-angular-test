import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EditFormService } from '../services/edit-form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['../edit-form/edit-form.component.css'],
})
export class EditNameComponent implements OnInit {
  @Input('firstName') firstName: String;
  @Input('lastName') lastName: String;

  @ViewChild('newEditForm') newEditForm: NgForm;
  constructor(public EditFormService: EditFormService) {}

  ngOnInit(): void {}

  onFormSubmit(data): void {
    this.EditFormService.changeData(data);
    this.newEditForm.reset();
  }
}
