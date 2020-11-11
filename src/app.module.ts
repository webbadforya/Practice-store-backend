import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsModule } from './admins/admin.module';
import { ProductModule } from './products/products.module'


@Module({
  imports: [TypeOrmModule.forRoot(), AdminsModule,ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
