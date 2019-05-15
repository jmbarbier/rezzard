import {Component, Input, OnInit} from '@angular/core';
import {Network} from '../network.service';

@Component({
  selector: 'app-network-display',
  templateUrl: './network-display.component.html',
  styleUrls: ['./network-display.component.sass']
})
export class NetworkDisplayComponent implements OnInit {
  @Input() public network: Network;
  @Input() public scale = 0.03;

  constructor() {
  }

  ngOnInit() {
  }

}
