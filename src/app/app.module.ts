import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { DashboardService } from 'src/dashboard/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		AppService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
