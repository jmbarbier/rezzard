import {Injectable} from '@angular/core';
import {Node} from '../node/node';
import {Link} from '../link/link';
import {Packet} from '../packet/packet';

export interface INetworkOptions {
  numNodes: number;
  numLinks: number;
  linkStrategy: 'random';
  routingStrategy: 'random';
}

export class Network {
  public nodes: Node[];
  public links: Link[];
  public packets: Packet[];

  constructor() {
  }

  public generate(params: INetworkOptions): void {
    this.packets = [];
    this.nodes = [];
    for (let i = 0; i < params.numNodes; i++) {
      const newNode = new Node(i);
      this.nodes.push(newNode);
    }

    this.links = [];
    for (let i = 0; i < params.numLinks; i++) {
      const newLink = new Link(i);
      this.links.push(newLink);
    }
    this.connectLinks(params.linkStrategy);
  }

  public check(): boolean {
    for (const n of this.nodes) {
      if (n.links.length === 0) {
        return false;
      }
    }
    return true;
  }

  public connectLinks(strategy: 'random') {
    if (strategy === 'random') {
      this.randomConnectLinks();
    }
  }

  public randomConnectLinks() {
    for (const n of this.links) {
      let A: Node;
      let B: Node;
      do {
        A = this.nodes[Math.floor(Math.random() * this.nodes.length)];
        B = this.nodes[Math.floor(Math.random() * this.nodes.length)];
      } while (!n.connect(A, B));
    }
  }


  public emit() {
    const newPacket = new Packet(this.packets.length,
      this.nodes[Math.floor(Math.random() * this.nodes.length)],
      this.nodes[Math.floor(Math.random() * this.nodes.length)]);
    this.packets.push(newPacket);
  }

  public tick(dt: number = 1) {
    for (const p of this.packets) {
      p.tick(dt);
    }
  }

  public removePacket(p: Packet): void {
    const pos = this.packets.indexOf(p);
    if (pos !== -1) {
      this.packets.splice(pos, 1);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private _current: Network;

  public get current(): Network {
    return this._current;
  }

  public generate(params: INetworkOptions): void {
    do {
      this._current = new Network();
      this._current.generate(params);
    } while (!this.current.check());

  }

}
