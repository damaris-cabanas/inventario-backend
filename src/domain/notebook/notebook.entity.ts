import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsString, Length, IsEnum } from 'class-validator';
import { Status } from 'src/enums/status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Procesador } from 'src/enums/procesador.enum';

@Entity()
export class Notebook {
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
    maxLength: 30,
  })
  @IsString()
  @Column()
  userold: string;

  @ApiProperty({
    type: 'string',
    maxLength: 20,
  })
  @Length(2)
  @IsString()
  @Column()
  ubicacion: string;

  @ApiProperty({
    type: 'string',
    maxLength: 20,
  })
  @Length(2)
  @IsString()
  @Column()
  modelo: string;

  @ApiProperty({
    enum: Procesador,
  })
  @IsEnum(Procesador)
  @Column()
  procesador: Procesador;

  @ApiProperty({
    type: 'string',
    maxLength: 20,
  })
  @Length(2)
  @IsString()
  @Column()
  bp: string;

  @ApiProperty({
    enum: Status,
  })
  @IsEnum(Status)
  @Column()
  status: Status;

}
