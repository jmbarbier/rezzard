import {Link} from '../link/link';

export class Node {
  public id: number;
  public name: string;
  public pos: { x: number; y: number };
  public links: Link[];
  public routingStrategy: 'random';

  constructor(id: number, strategy: 'random' = 'random') {
    this.id = id;
    this.routingStrategy = strategy;
    this.name = `node ${id}`;
    this.pos = {
      x: Math.random(),
      y: Math.random()
    };
    this.links = [];
  }

  public routePacket(from: Node, to: Node): Node | null {
    let next: Link;
    let tries = 0;
    do {
      tries += 1;
      next = this.links[Math.floor(Math.random() * this.links.length)];
      if (next.A === from || next.B === from) {
        continue;
      }
      break;
    } while (tries < 20);
    return next.A === this ? next.B : next.A;
  }

}
