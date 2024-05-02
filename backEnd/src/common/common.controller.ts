import { Controller, Get, Post, Body, Param, Req, Query } from '@nestjs/common';
import { CommonService } from './common.service';
import { LoginSite } from 'src/entities/login_site.entity';
import { get } from 'http';
import { SoapModuleOptionsFactoryType } from 'nestjs-soap';
import { TakeOrderSpecial } from 'src/entities/take_order_special';
import { InsertOrderLog } from 'src/dto/InserOrderLog';

@Controller('common')
export class CommonController {
  constructor(private commonService: CommonService) {}
  //환경설정에 저장된 쇼핑몰 리스트 전체 조회
  //필요 없는 정보들을 빼깅 위해 DTO 설정하기!!!!
  @Post()
  async getAccount(@Body('ampCode') ampCode: string): Promise<LoginSite[]> {
    return await this.commonService.getAccount(ampCode);
  }

  //사이트에서 제공하는 주문 데이터 가져오기(매칭된 데이터)
  //매칭되지 않은 필드 및 중복기준에 사용되는 필드 빼고 가져오기 위해 DTO 설정하기!!!!
  @Get()
  async getOrderInfo(@Query('siteCode') siteCode: string): Promise<string> {
    return await this.commonService.getOrderInfo({ siteCode });
  }

  //특별처리 저장
  @Post('save')
  async insertOrderSpecial(@Body() body: TakeOrderSpecial): Promise<string> {
    return await this.commonService.insertOrderSpecial(body);
  }

  //특별처리 로그저장
  @Post('saveLog')
  async insertLogOrderSpecial(@Body() body: InsertOrderLog): Promise<string> {
    return await this.commonService.insertLogOrderSpecial(body);
  }
  //my-cate처럼 업체 DB에 특별처리 테이블 생성
  //필드 : 사이트코드, 특별처리

  //사이트에서 자주 사용되는 특별처리 리스트
  @Get('list')
  async getPreOrderSpecialList(
    //@Req() req: Request,
    @Query('ampCode') ampCode: string,
    @Query('siteCode') siteCode: string, //@Req() req: Request,
  ): Promise<string> {
    console.log(ampCode);
    console.log(siteCode);
    return await this.commonService.getPreOrderSpecialList({
      ampCode,
      siteCode,
    });
  }
  /*
  //조건문 특별처리 리스트 불러오기
  @Get(':siteCode')
  async getAssumeList(@Param('siteCode') siteCode: string): Promise<string> {
    return await this.commonService.getOrderInfo({ siteCode });
  }*/
}
