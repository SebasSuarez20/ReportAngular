import { TestBed } from '@angular/core/testing';

import { ConsumoAppService } from './consumo-app.service';

describe('ConsumoAppService', () => {
  let service: ConsumoAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
