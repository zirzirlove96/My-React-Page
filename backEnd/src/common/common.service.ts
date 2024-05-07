import { TakeOrderSpecialRepository } from './../respository/TakeOrderSpecialRepository';
import { DataSource, Entity, EntityRepository, Repository } from 'typeorm';
import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginSite } from 'src/entities/login_site.entity';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';
import axios from 'axios';
import { TakeOrderSpecial } from 'src/entities/take_order_special';
import { OrderCmtRepositiory } from 'src/respository/OrderCmtRepository';
import { AutoOrderRepository } from 'src/respository/AutoOrderRepository';

@Injectable()
export class CommonService {
  constructor(
    private readonly loginsiteRepository: LoginSiteRespository,
    //@InjectRepository(TakeOrderSpecial)
    //private readonly takeOrderSpecialRepository: Repository<TakeOrderSpecial> => 해당 소스는 service에서 DB와 상호작용을 직접적으로 하는 소스
    //Repository를 생성하므로써 Provider에 해당 repository를 선언하여 사용하면 된다.
    private readonly takeOrderSpecialRepository: TakeOrderSpecialRepository,
    private readonly orderCmtRepository: OrderCmtRepositiory,
    private readonly autoOrderRepository: AutoOrderRepository,
    private dataSource: DataSource,
  ) {}

  //SELECT a.code, a.name FROM study.auto_order as a inner join study.login_site as b on a.code = b.siteCode and b.ampCode = 'amp_engine'
  async getAccount(ampCode: string): Promise<LoginSite[]> {
    let result;
    try {
      /*result = await this.loginsiteRepository.find({
        select: {
          siteCode: true,
        },
        where: {
          ampCode: ampCode,
        },
      });*/
      result = await this.autoOrderRepository
        .createQueryBuilder('auto_order')
        .select(['auto_order.code', 'auto_order.name'])
        .innerJoin('auto_order', 'login_site')
        //.where('order.code = :siteCode')
        .andWhere('ampCode = :ampCode', { ampCode: 'amp_engine' })
        .getMany();
      console.log(result);
      return result;
    } catch (e) {
      console.error(e);
    }
    return result;
  }

  async getOrderInfo(siteCode: string): Promise<string> {
    let orderinfo;
    try {
      /*orderinfo = await this.autoOrderRepository.find({
        select: {
          name: true,
          overlap_mode: true,
          data_normal: true,
        },
        where: {
          code: siteCode,
        },
      });*/
      orderinfo = await this.autoOrderRepository.find();
    } catch (e) {
      console.error(e);
    }
    //return '판매가-price || 상품명-model';
    return orderinfo;
  }

  async insertOrderSpecial(body): Promise<string> {
    let result;
    try {
      return await this.saveTakeOrderSpecial(body);
    } catch (e) {
      console.error(e);
    }

    return result;
  }

  //로그 쌓기
  async insertLogOrderSpecial(body): Promise<string> {
    let result;
    try {
      return await this.orderCmtRepository.save(body);
    } catch (e) {
      console.error(e);
    }
  }

  async getPreOrderSpecialList(): Promise<string> {
    let orderlist;
    try {
      /*orderlist = await this.takeOrderSpecialRepository.find({
        where: {
          siteCode: siteCode,
        },
      });*/
      orderlist = await this.takeOrderSpecialRepository.find();
    } catch (e) {
      console.error(e);
    }
    return orderlist;
  }

  async saveTakeOrderSpecial(body) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    let result2;
    try {
      const order = new TakeOrderSpecial();
      order.number = body.number;
      order.siteCode = body.siteCode;
      order.specialCode = body.specialCode;

      const result = await this.takeOrderSpecialRepository.find({
        select: {
          specialCode: true,
        },
        where: {
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
  }
}
