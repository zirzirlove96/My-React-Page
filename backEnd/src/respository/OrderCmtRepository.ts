import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { OrderCmt } from 'src/entities/order_cmt';

@Injectable()
export class OrderCmtRepositiory extends Repository<OrderCmt> {
  constructor(private dataSource: DataSource) {
    super(OrderCmt, dataSource.createEntityManager());
  }
  // entity 컨트롤을 위해서는 Repository<>를 extends 해주어야 함
  /*async find(): Promise<LoginSite[]> {
    
    return "123"
  }*/
}
