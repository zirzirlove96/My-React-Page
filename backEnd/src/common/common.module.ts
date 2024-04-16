import { CommonService } from './common.service';
import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';

@Module({
  controllers: [CommonController],
  providers: [CommonService],
  imports: [
    TypeOrmModule.forFeature([LoginSiteRespository]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOSTNAME,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'study',
      entities: [join(__dirname, '/**/*.entity.ts')],
      synchronize: false,
    }),
  ],
})
export class CommonModule {}
