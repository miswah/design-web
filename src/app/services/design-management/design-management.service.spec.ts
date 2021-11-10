import { TestBed } from '@angular/core/testing';

import { DesignManagementService } from './design-management.service';

describe('DesignManagementService', () => {
  let service: DesignManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
