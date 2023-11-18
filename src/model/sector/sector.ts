import { ISector } from "interfaces/interfaces";

export class Sector implements ISector {
  
  constructor(public props: ISector) {}

  get id(): number { return this.props.id; }
  get name(): string { return this.props.name; }
 

  static fromJSON(sector: ISector): Sector {
    return new Sector(sector)
  }
}