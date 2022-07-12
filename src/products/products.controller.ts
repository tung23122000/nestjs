import { ProductsService } from './products.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './products.entity';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }

    @Post('crete')
    async addUser(@Body() product: Product){
        return this.productsService.create(product);
    }

    @Get('users')
    async getAll (){
        return this.productsService.getlist();
    }

    @Get('user/:id')
    async getOne (@Param('id') id:  number ){
        return this.productsService.getOne(id);
    }

    @Put('edit/:id')
    async Update(@Param('id') id: number, @Body() product: Product) {
        return this.productsService.edit(id, product);
    }
}
