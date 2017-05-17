import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class MemberService implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('We get started');
  }

}
