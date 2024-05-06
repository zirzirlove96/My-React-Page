import { Injectable } from '@nestjs/common';
import { AutoOrder } from 'src/entities/auto_order';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AutoOrderRepository extends Repository<AutoOrder> {
  constructor(private dataSource: DataSource) {
    super(AutoOrder, dataSource.createEntityManager());
  }
}
