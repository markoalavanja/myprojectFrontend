import { TestBed } from '@angular/core/testing';

import { DeloviApiService } from './delovi-api.service';

describe('DeloviApiService', () => {
  let service: DeloviApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeloviApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
