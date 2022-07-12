import { ProductsService } from './products.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './products.entity';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }

    @Post('post')
    async addProduct(@Body() product: Product) {
        this.productsService.insertProduct(product);
    }

    @Get('get')
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }
}
