import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  username = '';

  users: string[] = [];

  addUser() {
    if (this.username.trim()) {
      this.users.push(this.username);
      this.username = '';
    }
  }
}
