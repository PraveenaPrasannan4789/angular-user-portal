//databinding
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './home.html',
//   styleUrl: './home.scss',
// })
// export class Home {
//   username = '';

//   users: string[] = [];

//   addUser() {
//     if (this.username.trim()) {
//       this.users.push(this.username);
//       this.username = '';
//     }
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { UserService } from '../user';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './home.html',
//   styleUrl: './home.scss',
// })
// export class Home {
//   users: string[] = [];

//   constructor(private userService: UserService) {
//     this.users = this.userService.getUsers();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      this.users = data;
    });
  }
}
