import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public isClient!:Boolean;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.isClient=this.userService.isLoggedInClient();
  
  }

}
