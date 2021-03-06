import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {

  constructor() { }
  private subject = new Subject<any>();

  sendMessage(message: string) {
    console.log("messageservice",message);
    
    this.subject.next({ text: message });
    }

    clearMessage() {
      this.subject.next();
      }

      getMessage(): Observable<any> {
        return this.subject.asObservable();
        }
}
