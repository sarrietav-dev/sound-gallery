import { TestBed } from '@angular/core/testing';

import { AudioStorageService } from './audio-storage.service';

describe('AudioStorageService', () => {
  let service: AudioStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
