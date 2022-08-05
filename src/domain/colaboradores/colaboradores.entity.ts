import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsString, Length, IsEnum } from 'class-validator';
import { Status } from 'src/enums/status.enum';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Colaboradores {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: 'string',
    maxLength: 10,
  })
  @Length(5)
  @IsString()
  @Column()
  usuario: string;

  @ApiProperty({
    type: 'string',
    maxLength: 10,
  })
  @Length(2)
  @IsString()
  @Column()
  area: string;

  @ApiProperty({
    enum: Status,
  })
  @IsEnum(Status)
  @Column()
  status: Status;

}
