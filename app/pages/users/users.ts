import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import GithubUsers provider
import { GithubUsers } from '../../providers/github-users/github-users';
// import user model
import { User } from '../../models/user';
// import user's detail page
import { UserDetailsPage } from '../user-details/user-details';

import { Capitalize } from '../../pipes/capitalize';

/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [GithubUsers],
  pipes: [ Capitalize ]
})
export class UsersPage {
  users: User[];
  constructor(private nav: NavController, private githubUsers: GithubUsers) {
    githubUsers
      .load()
      .then(users => this.users = users);
  }

  goToDetails(event, login) {
    this.nav.push(UserDetailsPage, {
      login: login
    });
  }
  search(searchTerm) {
    let term = searchTerm.target.value;

    // search only if we have 3 or more characters
    if (term.trim() == '' || term.trim().length < 3) {
      this.githubUsers
      .load()
      .then(users => this.users = users)
    } else {
      this.githubUsers.searchUsers(term)
      .then(users => this.users = users)
    }
  }
}



