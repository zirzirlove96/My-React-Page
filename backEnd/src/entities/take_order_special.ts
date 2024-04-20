import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('takeorderspecial')
export class TakeOrderSpecial {
  @PrimaryGeneratedColumn()
  programcode: string;

  @Column()
  siteCode: string;

  @Column()
  spcialcode: string;
}
