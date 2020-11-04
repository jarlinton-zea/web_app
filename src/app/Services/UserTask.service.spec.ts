/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserTaskService } from './UserTask.service';

describe('Service: UserTask', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTaskService]
    });
  });

  it('should ...', inject([UserTaskService], (service: UserTaskService) => {
    expect(service).toBeTruthy();
  }));
});
