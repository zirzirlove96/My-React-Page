// class를 사용자 정의 repository로 사용하도록 선언하는 decorator

import { LoginSite } from 'src/entities/login_site.entity';
import { EntityRepository, Repository } from 'typeorm';

// 인자로 사용할 Entity class를 넣어줌
@EntityRepository(LoginSite)
export class LoginSiteRespository extends Repository<LoginSite> {
  // entity 컨트롤을 위해서는 Repository<>를 extends 해주어야 함
  /*async find(): Promise<LoginSite[]> {
    
    return "123"
  }*/
}
