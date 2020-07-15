import { TestBed } from '@angular/core/testing';

import { CloseFormService } from './close-form.service';

describe('CloseFormService', () => {
  let service: CloseFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloseFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
