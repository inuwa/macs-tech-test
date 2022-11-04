import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	formGroup: FormGroup;
	constructor(
		private appService: AppService,
		private readonly formBuilder: FormBuilder
	) {
		this.formGroup = this.formBuilder.group({
			title: ['', Validators.required],
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', Validators.compose([Validators.required, Validators.email])]
		});
	}

	ngOnInit(): void {
	}

	/**
	 * Saves the user data to a file
	 * @returns void
	 */
	saveUserData(): void {
		if (this.formGroup.invalid) return;
		this.appService.saveUserData(this.formGroup.value);
	}
}
