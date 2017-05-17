import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MemberService implements OnInit {

  private websocket: any;

  constructor() { }

  ngOnInit() {
    
  }

  listenToTheSocket(): Observable<any> {
    this.websocket = new WebSocket("wss://notessensei.mybluemix.net/ws/angular");
    // this.websocket.onopen = (evt) => {
    //   this.websocket.send("Obseravbles are cool");
    // };

    return Observable.create(observer => {
      this.websocket.onmessage = (evt) => {
        observer.next(evt);
      };
    })
      .map(res => res.data)
      .share();
  }

}
