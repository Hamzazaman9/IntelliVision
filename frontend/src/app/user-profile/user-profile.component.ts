import { Component, OnInit } from '@angular/core';
import { UserService } from '../sahred/user.service';
import { Router } from "@angular/router";
import { User } from '../sahred/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);

      }
    );
  }

  onEdit(user:User){
    this.userService.selectedUser = user;
    this.router.navigateByUrl('/editProfile')
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
