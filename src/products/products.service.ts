import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./products.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    ) {}

    create(prduct: Product){
        return this.productRepository.save(prduct);
    }

    getlist(){
        return this.productRepository.find ();
    }

    getOne (id: number){

        return this.productRepository.findOneBy({id})
    }
        
    edit(id: number, prduct: Product){
        this.productRepository.delete(id);
       return this.productRepository.save(prduct)
    }

    remove(id: number){
        return this.productRepository.delete(id);

    }
}