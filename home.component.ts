import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Fabrik_3dmodel-app';
  searchText:any;
  models = [
    {name: "model11"},
    {name: "model12"},
    {name: "model13"},
    {name: "model14"},
    {name: "model15"},
    {name: "model16"},
    {name: "model17"},
    {name: "model18"},
    {name: "model19"},
    {name: "model20"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
