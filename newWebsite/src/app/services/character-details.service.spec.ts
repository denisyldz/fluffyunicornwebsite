import { TestBed } from '@angular/core/testing';

import { CharacterDetailsService } from './character-details.service';

describe('CharacterDetailsService', () => {
  let service: CharacterDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
