import {Node} from '../node/node';

export class Link {
  public id: number;
  public A: Node;
  public B: Node;

  constructor(id: number) {
    this.id = id;
  }

  public connect(A: Node, B: Node): boolean {
    if (A === B) {
      return false;
    }
    if (Math.sqrt((A.pos.x - B.pos.x) ** 2 +
      (A.pos.y - B.pos.y) ** 2) > 0.5) {
      return false;
    }
    for (const l of A.links) {
      if ((l.A === A && l.B === B) ||
        (l.A === B && l.B === A)) {
        return false;
      }
    }
    this.A = A;
    this.B = B;
    this.A.links.push(this);
    this.B.links.push(this);
    return true;
  }
}
