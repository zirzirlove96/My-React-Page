import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'study', name: 'auto_order_misc' })
export class AutoOrderMisc {
  @Column()
  @PrimaryGeneratedColumn()
  number: string;

  @Column()
  code: string;

  @Column()
  misc1: string;

  @Column()
  misc2: string;
  @Column()
  misc3: string;
  @Column()
  misc4: string;
  @Column()
  misc5: string;
  @Column()
  misc6: string;
  @Column()
  misc7: string;
  @Column()
  misc8: string;
  @Column()
  misc9: string;
  @Column()
  misc10: string;
  @Column()
  misc11: string;

  @Column()
  misc12: string;
  @Column()
  misc13: string;
  @Column()
  misc14: string;
  @Column()
  misc15: string;
  @Column()
  misc16: string;
  @Column()
  misc17: string;
  @Column()
  misc18: string;
  @Column()
  misc19: string;
  @Column()
  misc20: string;
}
