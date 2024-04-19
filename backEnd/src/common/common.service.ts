import { Entity, EntityRepository, Repository } from 'typeorm';
import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginSite } from 'src/entities/login_site.entity';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';
import axios from 'axios';
import { SoapModuleOptionsFactoryType } from 'nestjs-soap';

@Injectable()
export class CommonService {
  constructor(
    @InjectRepository(LoginSite)
    private readonly loginsiteRepository: Repository<LoginSite>,
  ) {}
  //@Injectable()

  async getAccount({ ampCode }): Promise<LoginSite[]> {
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
    //const result = await this.
    let orderinfo;
    try {
      orderinfo = await axios.post(process.env.ENT_URL, {
        site_code: siteCode,
      });

      console.log(orderinfo);
    } catch (e) {
      console.error(e);
    }
    //return '판매가-price || 상품명-model';
    return orderinfo;
  }
}
