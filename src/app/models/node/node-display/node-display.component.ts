import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../node';

@Component({
  selector: '[appNodeDisplay]',
  templateUrl: './node-display.component.html',
  styleUrls: ['./node-display.component.sass']
})
export class NodeDisplayComponent implements OnInit {
  @Input() public node: Node;
  @Input() public scale = 0.05;

  constructor() {
  }

  ngOnInit() {
  }

}
