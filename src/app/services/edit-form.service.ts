import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditFormService {
  public newEditFormSubject = new Subject<any>();
  constructor() {}

  changeData(data): void {
    this.newEditFormSubject.next(data);
  }

  addCloseForm(): void {
    this.newEditFormSubject.next(false);
  }
}
