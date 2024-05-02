import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'study', name: 'login_site' })
export class OrderCmt {
  @Column()
  wdate: Date;

  //데이터베이스 칼럼과 매핑해주는 역할
  @Column()
  siteCode: string;

  @Column()
  logProcess: string;

  @PrimaryGeneratedColumn()
  number: number;
}
