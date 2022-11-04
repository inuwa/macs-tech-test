import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IUserDetail } from 'src/app/user-detail.interface';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
	userDetails: IUserDetail[] = [];
	constructor(private readonly appService: AppService) { }

	ngOnInit(): void {
		this.appService.getUserDetails().subscribe((userDetails) => this.userDetails = userDetails)
	}
}
