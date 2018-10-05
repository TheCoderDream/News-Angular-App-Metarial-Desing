import {Component, Input, OnInit} from '@angular/core';
import {BridgeService} from '../../services/bridge.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input('menuRef') menuRef;
  constructor(private bridgeService: BridgeService) { }

  ngOnInit() {
  }

  sidenavOpen() {
    this.bridgeService.sidenavWasClicked.next('open');
  }

}
