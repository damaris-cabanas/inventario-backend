import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpsController } from './ups.controller';
import { Ups } from './ups.entity';
import { UpsService } from './ups.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ups])],
  controllers: [UpsController],
  providers: [UpsService]
})
export class UpsModule {}
