import { TestBed } from '@angular/core/testing';

import { LocalFileopenService } from './local-fileopen.service';

describe('LocalFileopenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalFileopenService = TestBed.get(LocalFileopenService);
    expect(service).toBeTruthy();
  });
});
