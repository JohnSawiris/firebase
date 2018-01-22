import { TestBed, inject } from '@angular/core/testing';

import { Album.ServiceService } from './album.service.service';

describe('Album.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Album.ServiceService]
    });
  });

  it('should be created', inject([Album.ServiceService], (service: Album.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
