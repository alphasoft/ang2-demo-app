import { Component } from '@angular/core';
import {PostsService} from '../services/posts.services';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent { 
  name: string;
  email: string;
  address : IAddress;
  hobbies : string[];
  showHobbies: boolean;
  posts: IPost[];

  constructor(private postsService: PostsService){
    this.name = 'John Doe'; 
    this.email = 'johnd71@gmail.com';
    this.address = {
        street: '1269 Northern Atlantic Blvd.',
        city: 'Rhode Island',
        state: 'NY'
    };
    this.hobbies = ['Music', 'Movies', 'Theater', 'Sports'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe( posts => {
            this.posts = posts;  // posts coming in from observable in our service
    });
  }

  toggleHobbies(){
      this.showHobbies = !this.showHobbies;
  }
  addHobby(newHobby:string){
      this.hobbies.push(newHobby);
  }
  deleteHobby(i:number){
      this.hobbies.splice(i,1); //delete one item at pos.#i
  }
}

interface IAddress {
    street: string;
    city: string;
    state: string;
}
interface IPost {
    id:   number;
    title:string;
    body: string;
}
