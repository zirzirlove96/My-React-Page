import { CommonService } from './common.service';
import { LoginSite } from 'src/entities/login_site.entity';
import { TakeOrderSpecial } from 'src/entities/take_order_special';
import { InsertOrderLog } from 'src/dto/InserOrderLog';
export declare class CommonController {
    private commonService;
    constructor(commonService: CommonService);
    getAccount(ampCode: string): Promise<LoginSite[]>;
    getOrderInfo(siteCode: string): Promise<string>;
    insertOrderSpecial(body: TakeOrderSpecial): Promise<string>;
    insertLogOrderSpecial(body: InsertOrderLog): Promise<string>;
    getPreOrderSpecialList(): Promise<string>;
}
