import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/dashboard/dashboard.component';
import { HomeComponent } from 'src/home/home.component';

const routes: Routes = [
	{ component: HomeComponent, pathMatch: 'full', path: 'home' },
	{ component: DashboardComponent, pathMatch: 'full', path: 'dashboard' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
