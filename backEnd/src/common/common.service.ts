import { TakeOrderSpecialRepository } from './../respository/TakeOrderSpecialRepository';
import { DataSource, Entity, EntityRepository, Repository } from 'typeorm';
import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginSite } from 'src/entities/login_site.entity';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';
import axios from 'axios';

@Injectable()
export class CommonService {
  constructor(
    private readonly loginsiteRepository: LoginSiteRespository,
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
      return await this.takeOrderSpecialRepository.saveTakeOrderSpecial(body);
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
}
