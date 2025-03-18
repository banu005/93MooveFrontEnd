import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
@Component({
  selector: 'app-tatoueur-view',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {
  user!: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['tatoueurId'];
    this.userService.findById(id).subscribe((data: User) => {
      this.user = data;
    });
  }
}
