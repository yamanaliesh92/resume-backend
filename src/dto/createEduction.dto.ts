import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
interface CreateEductionDtoData {
  title: string;
  university: string;
}

export class CreateEductionDto {
  // @IsString()
  // @IsNotEmpty()
  title: string;

  // @IsString()
  // @IsNotEmpty()
  university: string;

  // @IsNumber()
  // @IsNotEmpty()
  year: number;
}
