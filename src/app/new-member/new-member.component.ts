import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Member } from '../member-model';

import * as MemberActions from '../member-actions';
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent {

  newmember: Member;

  constructor(private store: Store<fromRoot.State>) { 
    this.newmember = { name: '', email: '' };
  }

  // Processing
  onSubmit() {
    const submission = Object.assign({}, this.newmember);
    this.store.dispatch(new MemberActions.AddMember(submission));
    this.newmember = { name: '', email: '' };
  }

}
