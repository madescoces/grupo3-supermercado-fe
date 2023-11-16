import { IRepositor } from "src/interfaces/interfaces";

export class Repositor{
  
  constructor(public props: IRepositor) {}
  
  get id(): number { return this.props.id; }
  get desc(): string { return this.props.desc; }

  static fromJSON(sector: IRepositor): Repositor {
    return new Repositor(sector)
  }
}