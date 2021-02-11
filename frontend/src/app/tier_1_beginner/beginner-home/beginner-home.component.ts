import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beginner-home',
  templateUrl: './beginner-home.component.html',
  styleUrls: ['./beginner-home.component.scss']
})
export class BeginnerHomeComponent implements OnInit {

  links: any[] = [
    {
      url: "bin2dec",
      name: "Bin2Dec"
    },
    {
      url: "borderRadiusPreviewer",
      name: "Border-radius Previewer"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
