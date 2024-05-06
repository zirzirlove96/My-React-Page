import { TakeOrderSpecialRepository } from './../respository/TakeOrderSpecialRepository';
import { DataSource } from 'typeorm';
import { LoginSite } from 'src/entities/login_site.entity';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';
import { OrderCmtRepositiory } from 'src/respository/OrderCmtRepository';
import { AutoOrderRepository } from 'src/respository/AutoOrderRepository';
export declare class CommonService {
    private readonly loginsiteRepository;
    private readonly takeOrderSpecialRepository;
    private readonly orderCmtRepository;
    private readonly autoOrderRepository;
    private dataSource;
    constructor(loginsiteRepository: LoginSiteRespository, takeOrderSpecialRepository: TakeOrderSpecialRepository, orderCmtRepository: OrderCmtRepositiory, autoOrderRepository: AutoOrderRepository, dataSource: DataSource);
    getAccount(ampCode: string): Promise<LoginSite[]>;
    getOrderInfo(siteCode: string): Promise<string>;
    insertOrderSpecial(body: any): Promise<string>;
    insertLogOrderSpecial(body: any): Promise<string>;
    getPreOrderSpecialList(): Promise<string>;
    saveTakeOrderSpecial(body: any): Promise<string>;
}
