import { IsNumber, IsString, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}
