import { Component, OnInit, Input } from '@angular/core';
import { CloseFormService } from '../services/close-form.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  @Input('editing') editing: String;
  @Input('firstName') firstName: String;
  @Input('lastName') lastName: String;
  @Input('bio') bio: String;

  constructor(public CloseFormService: CloseFormService) {}
  ngOnInit(): void {}

  onFormExit(): void {
    this.CloseFormService.addCloseForm();
  }
}
