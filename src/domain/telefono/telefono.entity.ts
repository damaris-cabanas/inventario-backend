import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsString, Length, IsEnum } from 'class-validator';
import { Status } from 'src/enums/status.enum';
import { Deposito } from '../deposito/deposito.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Tipo } from 'src/enums/tipo.enum';
import { Procesador } from 'src/enums/procesador.enum';

@Entity()
export class Telefono {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: 'string',
    maxLength: 10,
  })
  @Length(3)
  @IsString()
  @Column()
  usuario: string;

  @ApiProperty({
    type: 'string',
    maxLength: 10,
  })
  @Length(3)
  @IsString()
  @Column()
  area: string;

  @ApiProperty({
    type: 'string',
    maxLength: 20,
  })
  @Length(2)
  @IsString()
  @Column()
  bp: string;

  @ApiProperty({
    type: 'string',
    maxLength: 20,
  })
  @Length(2)
  @IsString()
  @Column()
  interno: string;

  @ApiProperty({
    enum: Status,
  })
  @IsEnum(Status)
  @Column()
  status: Status;

}
