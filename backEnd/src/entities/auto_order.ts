import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { LoginSite } from './login_site.entity';

@Entity({ database: 'study', name: 'auto_order' })
export class AutoOrder {
  @Column()
  @PrimaryGeneratedColumn()
  number: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  data_normal: number;

  //중복기준
  @Column()
  overlap_mode: number;

  @ManyToOne(() => LoginSite, (login_site) => login_site.auto_order)
  login_site: LoginSite;
}
