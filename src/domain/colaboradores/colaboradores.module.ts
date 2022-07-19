import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradoresController } from './colaboradores.controller';
import { Colaboradores } from './colaboradores.entity';
import { ColaboradoresService } from './colaboradores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Colaboradores])],
  providers: [ColaboradoresService],
  controllers: [ColaboradoresController],
})
export class ColaboradoresModule {}
