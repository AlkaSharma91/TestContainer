import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts=[];
  constructor(private ds:DataService) { }

  ngOnInit() {
   this.ds.getData().subscribe(data=>this.posts=data)

  }

}
