import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  private subscription: Subscription
  
  constructor(
    private sharingDataService: SharingDataService
  ) {
    this.subscription = this.sharingDataService.currentMessage.subscribe()
   }

  ngOnInit(): void {    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public activeAlert() : void {
    this.sharingDataService.sendMessage(true)
  }

  public inactiveAlert() : void {
    this.sharingDataService.sendMessage(false)
  }

}
