import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  matMenu;
  constructor() { }

  ngOnInit() {
  }
  getRef(ref): void {
    this.matMenu = ref;
  }
}
