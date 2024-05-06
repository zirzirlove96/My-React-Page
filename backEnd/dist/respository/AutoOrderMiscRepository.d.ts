import { AutoOrderMisc } from 'src/entities/auto_order_misc';
import { DataSource, Repository } from 'typeorm';
export declare class AutoOrderMiscRepository extends Repository<AutoOrderMisc> {
    private dataSource;
    constructor(dataSource: DataSource);
}
