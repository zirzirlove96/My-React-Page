import { Injectable } from "@nestjs/common";

@Injectable()
export class CommonService {
  @Injectable()
  getAccount(): string {
    return "asdasd";
  }
}
