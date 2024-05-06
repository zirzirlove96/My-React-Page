import { AutoOrder } from 'src/entities/auto_order';
import { DataSource, Repository } from 'typeorm';
export declare class AutoOrderRepository extends Repository<AutoOrder> {
    private dataSource;
    constructor(dataSource: DataSource);
}
