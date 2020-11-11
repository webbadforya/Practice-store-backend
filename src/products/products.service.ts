import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  
  // async validationAuth(login){
  //   return this.productRepository.findOne().then(a => {
  //     return a;
  //   }).catch(a => "net takogo");
  // }

   async create(body: Product){
   return await this.productRepository.insert(body);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(body): Promise<Product> {
    return this.productRepository.findOne(body);
  }

  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
