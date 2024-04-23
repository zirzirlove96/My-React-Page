import { IsString } from 'class-validator';
export class TakeOrderSpecialDTO {
  @IsString()
  specialCode: string;
}
