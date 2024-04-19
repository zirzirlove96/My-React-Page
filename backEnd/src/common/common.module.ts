import { CommonService } from './common.service';
import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';
import { LoginSite } from 'src/entities/login_site.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SoapModule } from 'nestjs-soap';

@Module({
  controllers: [CommonController],
  providers: [CommonService],
  imports: [
    /*SoapModule.registerAsync({
      clientName: 'EASYLAYW',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('http://amp.playauto.co.kr/api/ent/GetOrderTitle'),
      }),
    }),*/
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
