import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MembersService } from 'src/app/service/members.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  memberDetails: Member = {
    id: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    contactNumber: ''
  }

  constructor(private route: ActivatedRoute, private memberService: MembersService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.memberService.getMember(id).subscribe({
            next: (response) => {
              this.memberDetails = response;
            }
          })
        }
      }
    })

  }

  updateMember() {
    // call yung service
    //after ng call, invoke using subscribe method
    this.memberService.updateMember(this.memberDetails.id, this.memberDetails).subscribe({
      next: (member)=>
        this.router.navigate(['members'])
    })
  }

  deleteMember(){
    this.memberService.deleteMember(this.memberDetails.id, this.memberDetails).subscribe({
      next:(member)=>
      this.router.navigate(['members'])
    })
  }



}
