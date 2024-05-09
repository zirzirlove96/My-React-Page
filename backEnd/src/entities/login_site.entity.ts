import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { AutoOrder } from './auto_order';

@Entity({ database: 'study', name: 'login_site' })
export class LoginSite {
  @Column()
  ampCode: number;

  //데이터베이스 칼럼과 매핑해주는 역할
  @Column()
  siteCode: string;

  @Column()
  Id: string;

  @PrimaryGeneratedColumn()
  number: number;

  @OneToMany(() => AutoOrder, (auto_order) => auto_order.login_site)
  @JoinColumn({ name: 'siteCode' })
  auto_order: AutoOrder[];
}
