import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals: Goal[] =[
    {id:1, name:"Watch Finding Nemo",description:'Find an online version and watch merlin find his son'},
    {id:2, name:"Buy cookies",description:'I have to buy cookies for the parrot'},
    {id:3, name:"Get New Phone case",description:'Diana has her birthday coming up soon'},
    {id:4, name:"Get Chiwawa food",description:'Pupper likes expensive snacks'},
    {id:5, name:"Solve math homework",description:'Damn Math'},
    {id:6, name:"plot my world domination plan",description:'Cause I am an evil overlord'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
