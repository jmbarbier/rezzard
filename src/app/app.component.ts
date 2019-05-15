import {Component, OnInit} from '@angular/core';
import {Network, NetworkService} from './models/network/network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public network: Network;
  public ticking = false;

  public numNodes = 20;
  public numLinks = 40;
  public speed = 1;
  public scale = 30;
  public linkStrategy: 'random' = 'random';
  public routingStrategy: 'random' = 'random';

  constructor(public _network: NetworkService) {
    this.generate();
  }

  public generate(): void {
    this._network.generate({
      numNodes: this.numNodes,
      numLinks: this.numLinks,
      linkStrategy: this.linkStrategy,
      routingStrategy: this.routingStrategy
    });
    this.network = this._network.current;
  }

  public ngOnInit(): void {
    setInterval(() => {
      if (this.ticking) {
        this.network.tick(this.speed);
      }
    }, 50);
  }
}
