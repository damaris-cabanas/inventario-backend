import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Estante } from '../estante/estante.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Status } from 'src/enums/status.enum';

@Entity('depositos')
export class Deposito {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @IsString()
  @ApiProperty({
    nullable: false,
    required: true,
    maxLength: 50,
  })
  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  nombre: string;

  @ApiProperty({
    enum: Status,
  })
  @IsEnum(Status)
  @Column()
  status: Status;

  @OneToMany(() => Estante, (estante) => estante.deposito, {
    onDelete: 'CASCADE',
  })
  estante: Estante;
}
