import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharingDataService } from './sharing-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription
  title = 'sharing-data-components';
  public textAlert: string = 'Alerta desativado'

  constructor(
    private sharingDataService: SharingDataService
  ) {
    this.subscription = this.sharingDataService.currentMessage.subscribe(message => {
      if (message)
        this.activeAlert()
      else
        this.inactiveAlert()
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  private activeAlert() : void {
    this.textAlert = 'Alerta ativado'
  }

  private inactiveAlert() : void {
    this.textAlert = 'Alerta desativado'
  }
}
