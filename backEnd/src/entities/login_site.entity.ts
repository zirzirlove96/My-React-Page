import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('login_site')
export class LoginSite {
  @Column()
  ampCode: string;

  //데이터베이스 칼럼과 매핑해주는 역할
  @Column()
  siteCode: string;

  @Column()
  Id: string;

  @PrimaryGeneratedColumn()
  number: number;
}
