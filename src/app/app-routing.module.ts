import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './components/members/add-member/add-member.component';
import { EditMemberComponent } from './components/members/edit-member/edit-member.component';
import { MembersListComponent } from './components/members/members-list/members-list.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MembersListComponent
  // },
  {
    path: 'members',
    component: MembersListComponent
  },
  {
    path: 'members/add',
    component: AddMemberComponent
  },
  {
    path: 'members/edit/:id',
    component: EditMemberComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
