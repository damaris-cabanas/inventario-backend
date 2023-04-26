import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsString, Length, IsEnum } from 'class-validator';
import { Status } from 'src/enums/status.enum';
import { Deposito } from '../deposito/deposito.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Inventario } from '../inventario/inventario.entity';

@Entity()
export class Estante {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: 'string',
    maxLength: 25,
  })
  @Length(5)
  @IsString()
  @Column()
  nombre: string;

  @ApiProperty({
    enum: Status,
  })
  @IsEnum(Status)
  @Column()
  status: Status;

  @ManyToOne(() => Deposito, (deposito) => deposito.estante, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @IsNotEmpty()
  @ApiProperty({
    type: 'number'
  })
  @JoinColumn()
  deposito: Deposito;

  @OneToMany(() => Inventario, (inventario) => inventario.estante, {
    onDelete: 'CASCADE',
  })
  inventario: Inventario;
}
