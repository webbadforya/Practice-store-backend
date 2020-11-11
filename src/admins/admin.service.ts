import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}
  
  async validationAuth(login){
    return this.adminRepository.findOne({"login": login}).then(a => {
      return a;
    }).catch(a => "net takogo");
  }

   async createAdmin(body: Admin){
   return await this.adminRepository.insert(body);
  }

  findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  findOne(body): Promise<Admin> {
    return this.adminRepository.findOne(body);
  }

  async remove(id: string): Promise<void> {
    await this.adminRepository.delete(id);
  }
}
