import {Component, Input, OnInit} from '@angular/core';
import {Packet} from '../packet';

@Component({
  selector: '[appPacketDisplay]',
  templateUrl: './packet-display.component.html',
  styleUrls: ['./packet-display.component.sass']
})
export class PacketDisplayComponent implements OnInit {
  @Input() public packet: Packet;
  @Input() public scale = 0.05;

  constructor() {
  }

  ngOnInit() {
  }

}
