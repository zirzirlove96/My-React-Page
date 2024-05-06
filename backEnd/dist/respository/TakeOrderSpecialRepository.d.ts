import { TakeOrderSpecial } from 'src/entities/take_order_special';
import { DataSource, Repository } from 'typeorm';
export declare class TakeOrderSpecialRepository extends Repository<TakeOrderSpecial> {
    private dataSource;
    constructor(dataSource: DataSource);
}
