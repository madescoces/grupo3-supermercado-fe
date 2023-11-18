import { IRepositor } from "src/interfaces/interfaces";

export class Repositor{
  
  constructor(public props: IRepositor) {}
  
  get id(): number { return this.props.id; }
  get name(): string { return this.props.name; }

  static fromJSON(repositor: IRepositor): Repositor {
    return new Repositor(repositor)
  }
}