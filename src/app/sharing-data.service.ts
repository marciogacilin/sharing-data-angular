import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharingDataService {
    private messageSource = new BehaviorSubject(false)
    public currentMessage = this.messageSource.asObservable()

    public sendMessage(message: boolean): void {
        this.messageSource.next(message)
    }
}