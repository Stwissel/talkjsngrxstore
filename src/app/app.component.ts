import { Component, OnInit } from '@angular/core';
import { MemberService } from "./member.service";
import { Member } from "./member-model";
import { Store } from '@ngrx/store';

import * as MemberActions from './member-actions';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>,
    private memberService: MemberService) {

  }

  ngOnInit() {
    this.memberService.listenToTheSocket().subscribe((result: any) => {
      try {
        const member: Member = JSON.parse(result);
        this.store.dispatch(new MemberActions.AddMember(member));
      } catch (ex) {
        console.log(JSON.stringify(ex));
      }
    })
  }

}
