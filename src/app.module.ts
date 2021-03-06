import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/orm.config';
import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [AuthModule, ProductsModule, TypeOrmModule.forRoot(config), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
