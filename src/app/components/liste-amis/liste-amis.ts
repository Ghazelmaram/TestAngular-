
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-amis',
  imports: [FormsModule],
  templateUrl: './liste-amis.html',
  styleUrl: './liste-amis.css'
})
export class ListeAmis {

  newFriend: string = '';

  friends = [
    { id: 1, name: 'Sami' },
    { id: 2, name: 'Youssef' },
    { id: 3, name: 'Amine' }
  ];

  addFriend() {
    if (this.newFriend.trim() !== '') {
      this.friends.push({
        id: Date.now(),
        name: this.newFriend
      });

      this.newFriend = '';
    }
  }

  deleteFriend(id: number) {
    this.friends = this.friends.filter(friend => friend.id !== id);
  }
}
