import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  title = 'Fabrik_3dmodel-app';
  searchText:any;
  models = [
    {name: "model1",pattern: "Cheerios",imageUrl: "./assets/cheerois.jpg"},
    {name: "model2",pattern: "Swiss Museli", imageUrl: "./assets/swissMuseli.jpg"},
    {name: "model3",pattern: "Softa Silk", imageUrl: "./assets/softasilk.jpg"},
    {name: "model4",pattern: "Rice & Roni", imageUrl: "./assets/rice&roni.jpeg"},
    {name: "model5",pattern: "Fafalle", imageUrl: "./assets/fafalle.jpg"},
    {name: "model6",pattern: "Minute", imageUrl: "./assets/minute.jpg"},
    {name: "model7",pattern: "Nature Valley", imageUrl: "./assets/naturevalley.jpg"},
    {name: "model8",pattern: "Earl Grey", imageUrl: "./assets/earlvalley.jpg"},
    {name: "model9",pattern: "Muesli Fruits", imageUrl: "./assets/muselifruit.jpg"},
    {name: "model10",pattern: "Corn Flakes", imageUrl: "./assets/cornflakes.jpg"},
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
