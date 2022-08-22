import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TecladoController } from './teclado.controller';
import { Teclado } from './teclado.entity';
import { TecladoService } from './teclado.service';

@Module({
  imports: [TypeOrmModule.forFeature([Teclado])],
  controllers: [TecladoController],
  providers: [TecladoService]
})
export class TecladoModule {}
