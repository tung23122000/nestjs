import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/orm.config';
import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [AuthModule, ProductsModule, TypeOrmModule.forRoot(config)],
  controllers: [AuthController],
  providers: [AuthService],

})
export class AppModule {}
