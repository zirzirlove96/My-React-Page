import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommonService } from './common.service';
import { LoginSite } from 'src/entities/login_site.entity';
import { get } from 'http';
import { SoapModuleOptionsFactoryType } from 'nestjs-soap';

@Controller('common')
export class CommonController {
  constructor(private commonService: CommonService) {}
  //환경설정에 저장된 쇼핑몰 리스트 전체 조회
  @Post()
  async getAccount(@Body('ampCode') ampCode: string): Promise<LoginSite[]> {
    return await this.commonService.getAccount({ ampCode });
  }

  //사이트에서 제공하는 주문 데이터 가져오기(매칭된 데이터)
  @Get(':siteCode')
  async getOrderInfo(@Param('siteCode') siteCode: string): Promise<string> {
    return await this.commonService.getOrderInfo({ siteCode });
  }

  //my-cate처럼 업체 DB에 특별처리 테이블 생성
  //필드 : 사이트코드, 특별처리

  //사이트에서 자주 사용되는 특별처리 리스트
  /*@Get(':siteCode')
  async getPreConstructList(
    @Param('siteCode') siteCode: string,
  ): Promise<string> {
    return await this.commonService.getOrderInfo({ siteCode });
  }

  //조건문 특별처리 리스트 불러오기
  @Get(':siteCode')
  async getAssumeList(@Param('siteCode') siteCode: string): Promise<string> {
    return await this.commonService.getOrderInfo({ siteCode });
  }*/
}
