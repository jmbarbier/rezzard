import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../link';

@Component({
  selector: '[appLinkDisplay]',
  templateUrl: './link-display.component.html',
  styleUrls: ['./link-display.component.sass']
})
export class LinkDisplayComponent implements OnInit {
  @Input() public link: Link;
  @Input() public scale = 0.05;

  constructor() {
  }

  ngOnInit() {
  }

}
