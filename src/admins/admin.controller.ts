import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';


@Controller('admins')
export class AdminController {
   constructor(
      private readonly adminService: AdminService
   ){

   }
   // @Get("/all")
   // getAll():Promise<Admin[]>{
   //    return this.adminService.findAll();
   // }
   @Post("/create")
   async createAdmin(@Body() body: Admin): Promise<Partial<Admin>> | null{
      if(await this.adminService.validationAuth(body.login) === undefined){
         let res = await this.adminService.createAdmin(body);
         let adm = await this.adminService.findOne(res.identifiers[0].id)
         let { password, ...rest } = adm
         console.log(adm)
         return rest
      }
    else return null
   }

   @Post("/login")
   async connectAdmin(@Body() body: Admin){
      let res =  await this.adminService.findOne(body);
      if(res) {
         let { password, ...rest } = res;
         return rest;
      }
   }

   // @Get(":id")
   // async find(@Param() data: { id: string }){
   //    return await this.adminService.findOne(data.id);
   // }
   // @Get("/login/:login")
   // async findByName(@Param() data: { login: string }){
   //    console.log(await this.adminService.validationAuth(data.login))
   //    return await this.adminService.validationAuth(data.login);
   // }

}
