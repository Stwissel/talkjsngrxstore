import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { MemberListComponent } from './member-list/member-list.component';

// ngrx imports
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

// Our implementation
import { MemberEffects } from "./member-effects";
import { Reducers } from "./reducers";
import { MemberService } from "./member.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewMemberComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    StoreModule.provideStore(Reducers),
    EffectsModule.run(MemberEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
