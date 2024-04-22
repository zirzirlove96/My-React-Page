import { TakeOrderSpecialRepository } from './../respository/TakeOrderSpecialRepository';
import { DataSource } from 'typeorm';
import { LoginSite } from 'src/entities/login_site.entity';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';
export declare class CommonService {
    private readonly loginsiteRepository;
    private readonly takeOrderSpecialRepository;
    private dataSource;
    constructor(loginsiteRepository: LoginSiteRespository, takeOrderSpecialRepository: TakeOrderSpecialRepository, dataSource: DataSource);
    getAccount(ampCode: string): Promise<LoginSite[]>;
    getOrderInfo({ siteCode }: {
        siteCode: any;
    }): Promise<string>;
    insertOrderSpecial(body: any): Promise<string>;
    getPreOrderSpecialList({ ampCode, siteCode }: {
        ampCode: any;
        siteCode: any;
    }): Promise<string>;
    saveTakeOrderSpecial(body: any): Promise<string>;
}
