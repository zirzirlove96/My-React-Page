import { TakeOrderSpecialRepository } from './../respository/TakeOrderSpecialRepository';
import { DataSource, Entity, EntityRepository, Repository } from 'typeorm';
import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginSite } from 'src/entities/login_site.entity';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';
import axios from 'axios';
import { TakeOrderSpecial } from 'src/entities/take_order_special';

@Injectable()
export class CommonService {
  constructor(
    private readonly loginsiteRepository: LoginSiteRespository,
    //@InjectRepository(TakeOrderSpecial)
    //private readonly takeOrderSpecialRepository: Repository<TakeOrderSpecial> => 해당 소스는 service에서 DB와 상호작용을 직접적으로 하는 소스
    //Repository를 생성하므로써 Provider에 해당 repository를 선언하여 사용하면 된다.
    private readonly takeOrderSpecialRepository: TakeOrderSpecialRepository,
    private dataSource: DataSource,
  ) {}

  async getAccount(ampCode: string): Promise<LoginSite[]> {
    console.log('123123123');
    const result = await this.loginsiteRepository.find({
      select: {
        siteCode: true,
      },
      where: {
        ampCode: ampCode,
      },
    });
    return result;
  }

  async getOrderInfo({ siteCode }): Promise<string> {
    let orderinfo;
    try {
      orderinfo = await axios.post('http://localhost:4000/common', {
        site_code: siteCode,
      });

      console.log(orderinfo);
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

  async getPreOrderSpecialList({ ampCode, siteCode }): Promise<string> {
    let orderlist;
    try {
      orderlist = await this.takeOrderSpecialRepository.find({
        select: {
          specialCode: true,
        },
        where: {
          siteCode: siteCode,
          ampCode: ampCode,
        },
      });

      return orderlist;
    } catch (e) {
      console.error(e);
    }
    return '123';
  }

  async saveTakeOrderSpecial(body) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    let result2;
    try {
      const order = new TakeOrderSpecial();
      order.ampCode = body.ampCode;
      order.siteCode = body.siteCode;
      order.specialCode = body.specialCode;

      const result = await this.takeOrderSpecialRepository.find({
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
  }
}
