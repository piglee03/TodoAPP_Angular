import { TestBed, inject } from '@angular/core/testing';

import { GitAPIService } from './git-api.service';

describe('GitAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitAPIService]
    });
  });

  it('should be created', inject([GitAPIService], (service: GitAPIService) => {
    expect(service).toBeTruthy();
  }));
});
