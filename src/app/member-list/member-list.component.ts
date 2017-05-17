import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Member } from '../member-model';

import * as MemberActions from '../member-actions';
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit{
  members: Observable<Member[]>;

  constructor(private store: Store<fromRoot.State>) { 
    this.members = store.select(fromRoot.selectMembers);
  }

  ngOnInit() {    
  }

  // Emit event to the store to remove a member
  deleteMember(memberEmail: string) {
    this.store.dispatch(new MemberActions.RemoveMember(memberEmail));
  }

}
