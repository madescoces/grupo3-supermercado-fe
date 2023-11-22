import { ITableList } from "interfaces/interfaces";



export class TableList implements ITableList{
  
  constructor(public props:ITableList){}
      
  get data(){return this.props.data} 
  get titles(){return this.props.titles}   
}