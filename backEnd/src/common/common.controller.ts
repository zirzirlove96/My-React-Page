import { Controller, Get, Post } from '@nestjs/common';
import { CommonService } from './common.service';
import { LoginSite } from 'src/entities/login_site.entity';

@Controller('common')
export class CommonController {
  constructor(private commonService: CommonService) {}
  //환경설정에 저장된 쇼핑몰 리스트 전체 조회
  @Get()
  async getAccount(): Promise<LoginSite[]> {
    console.log('123');
    return await this.commonService.getAccount();
  }

  //사이트에서 제공하는 주문 데이터 가져오기
  @Post('/siteCode=')
  getOrderInfo(): string {
    return this.commonService.getOrderInfo();
  }

  //my-cate처럼 업체 DB에 특별처리 테이블 생성
  //필드 : 사이트코드, 특별처리
}
