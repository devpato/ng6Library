import { TestBed, inject } from '@angular/core/testing';

import { LibTamoService } from './lib-tamo.service';

describe('LibTamoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibTamoService]
    });
  });

  it('should be created', inject([LibTamoService], (service: LibTamoService) => {
    expect(service).toBeTruthy();
  }));
});
