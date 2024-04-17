import { CommonService } from './common.service';
import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';
import { LoginSite } from 'src/entities/login_site.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [CommonController],
  providers: [CommonService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([LoginSite]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOSTNAME,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'study',
      entities: [LoginSite],
      synchronize: false,
    }),
    LoginSite,
  ],
})
export class CommonModule {}
