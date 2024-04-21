// class를 사용자 정의 repository로 사용하도록 선언하는 decorator

import { LoginSite } from 'src/entities/login_site.entity';
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginSiteRespository extends Repository<LoginSite> {
  constructor(private dataSource: DataSource) {
    super(LoginSite, dataSource.createEntityManager());
  }
  // entity 컨트롤을 위해서는 Repository<>를 extends 해주어야 함
  /*async find(): Promise<LoginSite[]> {
    
    return "123"
  }*/
}
