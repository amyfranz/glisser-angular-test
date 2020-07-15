import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CloseFormService {
  public newCloseFormSubject = new Subject<any>();
  constructor() {}

  addCloseForm(): void {
    this.newCloseFormSubject.next(false);
  }
}
