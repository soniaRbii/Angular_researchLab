import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../app-config';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
displayedColumns:string[]=['id','cin','name','createdDate','cv' ,'type'];
dataSource : any[]=GLOBAL._DB.members
  



}
