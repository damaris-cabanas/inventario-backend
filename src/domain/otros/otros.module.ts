import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtrosController } from './otros.controller';
import { Otros } from './otros.entity';
import { OtrosService } from './otros.service';

@Module({
  imports: [TypeOrmModule.forFeature([Otros])],
  controllers: [OtrosController],
  providers: [OtrosService]})
export class OtrosModule {}
