import {Node} from '../node/node';

export class Packet {
  public id: number;
  public path: Node[];
  public start: Node;
  public dest: Node;
  public ttl: number;
  public dead = false;
  public arrived = false;
  public distance = 0;
  public time = 0;
  public totalDistance = 0;
  public totalTime = 0;
  public position: { x: number, y: number };
  public color: { r: number, g: number, b: number, a: number };
  public infos = true;

  public constructor(id: number, start: Node, dest: Node) {
    this.id = id;
    this.start = start;
    this.dest = dest;
    this.path = [start];
    this.ttl = 20;
    this.position = {x: start.pos.x, y: start.pos.y};
    this.distance = 0;
    this.time = 0;
    this.color = {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
      a: 0.3
    };
  }

  public updatePosition(): boolean {
    let arrived = false;
    let percent = (this.time * 0.01) / this.distance * 100;
    if (percent >= 100) {
      percent = 100;
      arrived = true;
    }

    if (this.path.length < 2) {
      this.position = {x: this.path[0].pos.x, y: this.path[0].pos.y};
    } else {
      const l = this.path.length - 1;
      this.position = {
        x: this.path[l - 1].pos.x + (this.path[l].pos.x - this.path[l - 1].pos.x) * percent / 100,
        y: this.path[l - 1].pos.y + (this.path[l].pos.y - this.path[l - 1].pos.y) * percent / 100,
      };
    }
    return arrived;
  }

  public nextHop(): Node | null {
    if (this.dead || this.arrived) {
      return null;
    }
    if (this.path.length > 20) {
      this.dead = true;
      return null;
    }
    let cur = this.path[this.path.length - 1];
    if (cur === undefined) {
      cur = this.start;
    }
    const from = this.path[this.path.length - 2];
    const next = cur.routePacket(from, this.dest);
    if (!next) {
      this.dead = true;
      return null;
    }
    this.path.push(next);
    this.totalDistance += this.distance;
    this.distance = Math.sqrt((next.pos.x - cur.pos.x) ** 2 + (next.pos.y - cur.pos.y) ** 2);
    this.totalTime += this.time;
    this.time = 0;
    if (next === this.dest) {
      this.arrived = true;
    }
  }

  public tick(dt: number = 1) {
    if (this.dead || this.arrived) {
      return;
    }
    this.time += dt;
    if (this.updatePosition()) {
      this.nextHop();
    }

  }
}
