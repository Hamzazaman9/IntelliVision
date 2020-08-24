import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-nav-bar',
  templateUrl: './initial-nav-bar.component.html',
  styleUrls: ['./initial-nav-bar.component.css']
})
export class InitialNavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClickSignin(){
    this.router.navigateByUrl("/login")
  }
}
