import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AutoOrder } from './auto_order';

@Entity({ database: 'study', name: 'login_site' })
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

  /*@OneToOne(() => AutoOrder, { eager: true })
  @JoinColumn({ name: 'siteCode' })
  auto_order: AutoOrder;*/
}
