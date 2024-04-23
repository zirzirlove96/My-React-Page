import { IsString } from 'class-validator';

export class AccountLoginDTO {
  @IsString()
  readonly ampCode: string;
}
