import { LoginSite } from 'src/entities/login_site.entity';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';
export declare class CommonService {
    private loginsiteRepository;
    constructor(loginsiteRepository: LoginSiteRespository);
    getAccount(): Promise<LoginSite[]>;
    getOrderInfo(): string;
}
