import { Injectable } from "@nestjs/common";

@Injectable()
export class CommonService {
  @Injectable()
  getAccount(): string {
    return "asdasd";
  }

  getOrderInfo(): string {
    return "판매가-price || 상품명-model";
  }
}
