import { CommonService } from './common.service';
import { LoginSite } from 'src/entities/login_site.entity';
export declare class CommonController {
    private commonService;
    constructor(commonService: CommonService);
    getAccount(ampCode: string): Promise<LoginSite[]>;
    getOrderInfo(siteCode: string): Promise<string>;
    getPreConstructList(siteCode: string): Promise<string>;
    getAssumeList(siteCode: string): Promise<string>;
}
