import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MemberService implements OnInit {

  private websocket: any;
  private destination: string = "wss://notessensei.mybluemix.net/ws/angular";
  private incomingObservable:any;

  constructor() { }

  ngOnInit() {
    
  }

  listenToTheSocket(): Observable<any> {

    this.websocket = new WebSocket(this.destination);
  
    this.websocket.onopen = () => {
      console.log("WebService Connected to " + this.destination);
    }

    // We reconnect to the socket to make sure we get all values
    // ToDo: do we need a delay
    this.websocket.onclose = () => {
      this.incomingObservable = this.listenToTheSocket();
    }

    this.incomingObservable = Observable.create(observer => {
      this.websocket.onmessage = (evt) => {
        observer.next(evt);
      };
    })
      .map(res => res.data)
      .share();

     return this.incomingObservable 
  }

}
