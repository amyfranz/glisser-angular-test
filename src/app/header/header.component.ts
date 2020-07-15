import { Component, OnInit, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  @Input('firstName') firstName: String;
  @Input('lastName') lastName: String;

  constructor() {}

  ngOnInit(): void {}
}
