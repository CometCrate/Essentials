import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardComponent } from "@/app/views/secure/onboard/onboard.component";
import { CommonModule } from "@angular/common";
import { DashboardGuard } from "@/app/guards/secure/dashboard.guard";
import { SecureComponent } from "@/app/views/secure/secure.component";
import { SharedModule } from "@/app/shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [ DashboardGuard ]
      },
      {
        path: 'onboard',
        component: OnboardComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    SecureComponent,
    OnboardComponent
  ],
})
export class SecureModule {
}
