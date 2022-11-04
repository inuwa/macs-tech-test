import { TestBed } from '@angular/core/testing';

import { AppService } from '../app/app.service';

describe('HomeService', () => {
	let service: AppService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AppService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
