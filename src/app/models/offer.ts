import { Category } from "./category";
export class Offer {
    constructor(
        private id? :Number,
        private description? : String,
        private imageUrl? : String,
        private price? : Number,
        private category? : Category,
       

    ){

    }
}
