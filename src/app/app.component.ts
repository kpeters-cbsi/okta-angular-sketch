import { Component, OnInit } from '@angular/core'
import { OktaAuthService } from '@okta/okta-angular'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'okta-angular-sketch'
  isAuthenticated = false

  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    )
  }

  async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated()
  }

  async login(): Promise<void> {
    await this.oktaAuth.signInWithRedirect()
  }

  async logout(): Promise<void> {
    await this.oktaAuth.signOut()
  }
}
