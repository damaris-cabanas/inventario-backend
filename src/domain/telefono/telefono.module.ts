import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelefonoController } from './telefono.controller';
import { Telefono } from './telefono.entity';
import { TelefonoService } from './telefono.service';

@Module({
  imports: [TypeOrmModule.forFeature([Telefono])],
  controllers: [TelefonoController],
  providers: [TelefonoService]
})
export class TelefonoModule {}
