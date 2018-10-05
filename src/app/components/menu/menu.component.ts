import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('appMenu') appMenu;
  @Output('ref') ref = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.ref.emit(this.appMenu);
  }

}
