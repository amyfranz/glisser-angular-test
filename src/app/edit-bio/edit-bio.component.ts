import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EditFormService } from '../services/edit-form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.component.html',
  styleUrls: ['../edit-form/edit-form.component.css'],
})
export class EditBioComponent implements OnInit {
  @Input('bio') bio: String;

  @ViewChild('newEditForm') newEditForm: NgForm;
  constructor(public EditFormService: EditFormService) {}

  ngOnInit(): void {}

  onFormSubmit(data): void {
    this.EditFormService.changeData(data);
    this.newEditForm.reset();
  }
}
