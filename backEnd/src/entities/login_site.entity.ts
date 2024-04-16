import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("login_site")
export class LoginSite {
  @PrimaryGeneratedColumn()
  ampCode: string;

  siteCode: string;

  Id: string;
}
