import { CommonService } from './common.service';
import { LoginSite } from 'src/entities/login_site.entity';
export declare class CommonController {
    private commonService;
    constructor(commonService: CommonService);
    getAccount(): Promise<LoginSite[]>;
    getOrderInfo(): string;
}
