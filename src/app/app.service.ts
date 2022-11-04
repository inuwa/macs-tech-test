import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { IUserDetail } from './user-detail.interface';

@Injectable()
export class AppService {
	private location: string = '../assets/test.json';
	constructor(private readonly http: HttpClient) { }

	/**
	 * Saves user data in a file
	 * @param userDetail user data 
	 */
	saveUserData(userDetail: IUserDetail): Observable<Array<IUserDetail>> {
		return this.http.get<Array<IUserDetail>>(this.location)
			.pipe(
				map((data) => (data) ? data : []),
				catchError((e) => throwError(e)),
				switchMap((userDetails: IUserDetail[]) => {
					userDetails.push(userDetail);
					return this.postToFile(userDetails);
				}),
				take(1)
			);
	}

	private postToFile(userDetails: IUserDetail[]): Observable<IUserDetail[]> {
		return this.http.post<IUserDetail[]>(this.location, userDetails).pipe(
			map((details) => (details) ? details : []),
			catchError((e) => throwError(e)),
			take(1)
		);
	}

	/**
	 * Gets user details stored in a file
	 * @returns the contents of the json file
	 */
	getUserDetails(): Observable<Array<IUserDetail>> {
		return this.http.get<Array<IUserDetail>>(this.location).pipe(
			catchError((e) => throwError(e))
		);
	}
}
