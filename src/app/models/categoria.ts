export class CategoriaModel{
  catId: number;
  name: string;
  subcat: string;

  constructor(){ 
    this.catId = 0;
    this.name= '';
    this.subcat= '';
  }
}