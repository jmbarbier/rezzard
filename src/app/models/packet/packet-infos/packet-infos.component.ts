import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Packet} from '../packet';

@Component({
  selector: 'app-packet-infos',
  templateUrl: './packet-infos.component.html',
  styleUrls: ['./packet-infos.component.sass']
})
export class PacketInfosComponent implements OnInit {
  @Input() public packet: Packet;
  @Output() public remove = new EventEmitter<Packet>();

  constructor() {
  }

  ngOnInit() {
  }

}
