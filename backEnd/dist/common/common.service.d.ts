import { Repository } from 'typeorm';
import { LoginSite } from 'src/entities/login_site.entity';
export declare class CommonService {
    private readonly loginsiteRepository;
    constructor(loginsiteRepository: Repository<LoginSite>);
    getAccount(): Promise<LoginSite[]>;
    getOrderInfo(): string;
}
