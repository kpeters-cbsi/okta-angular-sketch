import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { CalculatorComponent } from './calculator/calculator.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'calculator',
    component: CalculatorComponent,
    canActivate: [OktaAuthGuard],
  },
  { path: 'callback', component: OktaCallbackComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
