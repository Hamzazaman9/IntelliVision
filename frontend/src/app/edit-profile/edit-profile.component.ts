import { Component, OnInit } from '@angular/core';
import { UserService } from '../sahred/user.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  showSucessMessage: boolean;
  serverErrorMessages: string;
  userService: UserService;
  router: Router

  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this.router = router
  }

  ngOnInit(): void {
  }



  onSubmit(form: NgForm) {
    this.router.navigateByUrl("/userprofile")
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      firstName: '',
      lastName: '',
      email: '',
      subscription: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
