import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'study', name: 'auto_order' })
export class AutoOrder {
  @Column()
  @PrimaryGeneratedColumn()
  number: string;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  data_normal: number;

  //중복기준
  @Column()
  overlap_mode: number;
}
