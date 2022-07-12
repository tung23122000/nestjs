import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./products.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    ) {}

    insertProduct(product: Product) {
        return this.productRepository.save(product);
    }

    findAll() {
        return this.productRepository.find();
    }
}