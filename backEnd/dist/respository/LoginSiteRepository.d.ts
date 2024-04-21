import { LoginSite } from 'src/entities/login_site.entity';
import { DataSource, Repository } from 'typeorm';
export declare class LoginSiteRespository extends Repository<LoginSite> {
    private dataSource;
    constructor(dataSource: DataSource);
}
