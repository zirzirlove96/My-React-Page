import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

//다중연동할 때 db명이랑 table 명칭 정의하기
@Entity({ database: 'study2', name: 'takeorderspecial' })
export class TakeOrderSpecial {
  @PrimaryGeneratedColumn()
  ampCode: string;

  @Column()
  siteCode: string;

  @Column()
  specialCode: string;
}
