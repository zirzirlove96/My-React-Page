import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TakeOrderSpecial } from 'src/entities/take_order_special';
import { DataSource, EntityRepository, Repository } from 'typeorm';

@Injectable()
export class TakeOrderSpecialRepository extends Repository<TakeOrderSpecial> {
  /*constructor(private dataSource: DataSource) {
    super(TakeOrderSpecial, dataSource.createEntityManager());
  }*/


  /*async saveTakeOrderSpecial(body) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    let result2;
    try {
      const order = new TakeOrderSpecial();
      order.ampCode = body.ampCode;
      order.siteCode = body.siteCode;
      order.specialCode = body.specialCode;

      const result = await this.find({
        select: {
          specialCode: true,
        },
        where: {
          ampCode: body.ampCode,
          siteCode: body.siteCode,
        },
      });

      if (result.length > 0) {
        order.specialCode = result[0].specialCode + '\n' + order.specialCode;
      }

      result2 = await queryRunner.manager.upsert(TakeOrderSpecial, order, []);

      console.log('특별처리 끝');
      console.log(result2);

      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      console.error(e);
    } finally {
      await queryRunner.release();
    }

    return 'success';
  }*/
}
