import { DataSource, Repository } from 'typeorm';
import { OrderCmt } from 'src/entities/order_cmt';
export declare class OrderCmtRepositiory extends Repository<OrderCmt> {
    private dataSource;
    constructor(dataSource: DataSource);
}
