import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './products.service';
import { Product } from './entities/products.entity';


@Controller('admins')
export class ProductController {
   constructor(
      private readonly productService: ProductService
   ){}
   

}
