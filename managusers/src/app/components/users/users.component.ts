import { Component , OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  total=0 ;
  constructor(
    public userService: UserService
  ) { }
  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      // this.total=0;
      this.getTotal()
    });

  }
  getTotal(){
    for (var i = 0; i < this.users.length; i++) {
      this.total += this.users[i].balance;
    }
  }
  
}
