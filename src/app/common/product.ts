export class Product {

    constructor (

        public  sku: string,
        public  name: string,
        public  description: string,
        public  unitPrice: number,
        public  active: boolean,
        public  unitsInStock: string,
        public dateCreated: Date,
        public lastUpdate: Date,
        public imageUrl:string,
    ){

    }
}
