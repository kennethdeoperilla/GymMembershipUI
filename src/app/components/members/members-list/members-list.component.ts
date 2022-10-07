import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Member } from 'src/app/models/member.model';
import { MembersService } from 'src/app/service/members.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  members: Member[] = [];
  searchValue: string = '';
  genderValue: string = '';
  // memCount: string = '9';
  mem_Count = this.members.length;
  // memCount = this.members;
  

  constructor(private membersService: MembersService) {
  }

  ngOnInit(): void {
    this.membersService.getAllMembers().subscribe({
      next: (members) => {
        // console.log(members)
        this.members = members;
        console.log(members.length)
        // console.log(this.memberCount())
      },
      // error: (members) =>
      //   console.log(members)
    })

    // this.memCount = this.members.length.toString()
    // console.log(this.memCount)

  }


  // memberCount() {
  //   var memcount = this.members.length

  // }

  


}
