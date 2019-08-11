import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users = [] as any;
  usersDisplay = [] as any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    getDataByName();

    this.getGithubUsersUsingAngular()
    .subscribe((response:Array<any>)=>{
      console.log(response);
      this.users = response.filter(function (el) {
        return el.type == "User";
      })
      .map(function (el) {
        // return el;
        return {
          login:el.login,
          node_id:el.node_id
        }
        // console.log (el);
      })
      this.usersDisplay = response.filter(function (el) {
        return el.type == "User";
      })
      .map(function (el) {
        // return el;
        return {
          login:el.login,
          node_id:el.node_id
        }
        // console.log (el);
      })
    });
  }

      query:string;

      findUser(query){
        console.log(query);
        this.usersDisplay = this.users.filter(function (el) {
          return (new RegExp(query)).test(el.login);
        })
      }


  getGithubUsersUsingAngular(){
    return this.http.get("https://api.github.com/users");
  }


  titles = ["Username", "Url", "Date"];
  // users = [{
  //   name: "Jim",
  //   url: "localhost:9000",
  //   date: new Date(),
  //   place: "Dubai",
  //   course: "Angular"
  // },
  // {
  //   name: "rock",
  //   url: "localhost:2000",
  //   date: new Date(),
  //   place: "UK",
  //   course: "Node"
  // },
  // {
  //   name: "steav",
  //   url: "localhost:8000",
  //   date: new Date(),
  //   place: "US",
  //   course: "React"
  // }]

  user = {
    login : null,
    url:null,
    id:null,
    avatar_url:null,
    Node_id:null
  };

  
  

    

  //  hello = "Hello world";
  // loadAllData(user) {
  //   //  console.log(user);
  //   this.user = user;
  // }
  // hideAllData() {
  //   this.user = {
  //     login: null,
  //     url: null,
  //     id: null,
  //     avatar_url: null,
  //     course: null
  //   };
  // }
  

}
function getDataByName(){
 var filteredUsers = [{
    name: "Jim",
    url: "localhost:9000",
    date: new Date(),
    place: "Dubai",
    course: "Angular"
  },
  {
    name: "rock",
    url: "localhost:2000",
    date: new Date(),
    place: "UK",
    course: "Node"
  },
  {
    name: "steav",
    url: "localhost:8000",
    date: new Date(),
    place: "US",
    course: "React"
  }];
  

  var Users = filteredUsers.filter(function(el){
    return el.name =="Jim"
  })

  console.log(filteredUsers);
  // console.log(Users);
}
