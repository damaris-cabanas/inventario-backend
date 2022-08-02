import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonitorController } from './monitor.controller';
import { Monitor } from './monitor.entity';
import { MonitorService } from './monitor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Monitor])],
  providers: [MonitorService],
  controllers: [MonitorController],
})
export class MonitorModule {}
