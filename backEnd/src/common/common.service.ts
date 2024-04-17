import { Entity, EntityRepository, Repository } from 'typeorm';
import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginSite } from 'src/entities/login_site.entity';
import { LoginSiteRespository } from 'src/respository/LoginSiteRepository';

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
    return '판매가-price || 상품명-model';
  }
}
