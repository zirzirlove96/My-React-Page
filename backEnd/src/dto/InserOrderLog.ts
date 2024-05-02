import { IsString } from 'class-validator';

export class InsertOrderLog {
  @IsString()
  readonly ampCode: string;
}
