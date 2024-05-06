import { Injectable } from '@nestjs/common';
import { AutoOrderMisc } from 'src/entities/auto_order_misc';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AutoOrderMiscRepository extends Repository<AutoOrderMisc> {
  constructor(private dataSource: DataSource) {
    super(AutoOrderMisc, dataSource.createEntityManager());
  }
}
