import { CommonService } from './common.service';
import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';
import { LoginSite } from 'src/entities/login_site.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SoapModule } from 'nestjs-soap';
import { TakeOrderSpecial } from 'src/entities/take_order_special';
import { TakeOrderSpecialRepository } from 'src/respository/TakeOrderSpecialRepository';
import { OrderCmt } from 'src/entities/order_cmt';
import { AutoOrder } from 'src/entities/auto_order';
import { AutoOrderMisc } from 'src/entities/auto_order_misc';
import { AutoOrderRepository } from 'src/respository/AutoOrderRepository';
import { AutoOrderMiscRepository } from 'src/respository/AutoOrderMiscRepository';
import { OrderCmtRepositiory } from 'src/respository/OrderCmtRepository';

@Module({
  controllers: [CommonController],
  //repository를 비즈니스 로직으로 만들어서 providers에 추가
  //repository : DB접근(쓰거나, 읽거나)
  providers: [
    CommonService,
    TakeOrderSpecialRepository,
    LoginSiteRespository,
    OrderCmtRepositiory,
    AutoOrderRepository,
    AutoOrderMiscRepository,
  ],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([
      LoginSite,
      TakeOrderSpecial,
      OrderCmt,
      AutoOrder,
      AutoOrderMisc,
    ]),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: 'mysql',
      host: process.env.DB_HOSTNAME,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'study',
      entities: [LoginSite, AutoOrder, AutoOrderMisc],
      synchronize: false,
    }),

    //다중 연동할때 name 정하기
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      name: 'takeorderspecial',
      type: 'mysql',
      host: process.env.DB_HOSTNAME,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'study2',
      entities: [TakeOrderSpecial],
      synchronize: false,
    }),
  ],
})
export class CommonModule {}
