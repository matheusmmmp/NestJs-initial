import { IsDateString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

const tableName = 'public.airport_translation';
const messageFront = ' já existente na base de dados e deve ser um registro único.';

export class DogInput {

  id: number;
  locale: string;

  @MaxLength(155, { message: 'Este campo deverá conter no máximo 155 caracteres' })
  @IsNotEmpty({ message: 'Este campo deve ser preenchido' })
  name: string;

  @IsOptional()
  @IsDateString({ message: 'Este campo necessita de uma data valida' })
  createdAt: Date;

  @IsOptional()
  @IsDateString({ message: 'Este campo necessita de uma data valida' })
  updatedAt: Date;

}
