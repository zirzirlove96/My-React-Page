import { Controller } from "@nestjs/common";
import { CommonService } from "./common.service";

@Controller("common")
export class CommonController {
  //환경설정에 저장된 쇼핑몰 리스트 전체 조회
  @Get()
  getAccount(): string {
    return this.CommonService.getAccount();
  }
}
