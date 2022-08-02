import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/enums/status.enum';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Repository } from 'typeorm';
import { MonitorDto } from './monitor.dto';
import { Monitor } from './monitor.entity';

@Injectable()
export class MonitorService<Monitor> extends GenericService<Monitor, MonitorDto> {
    constructor(@InjectRepository(Monitor) repository: Repository<Monitor>) {
      super(repository);
    }
  
    async getActivos(): Promise<Monitor[]> {
      return await this.repository.find({ where: { status: Status.ACTIVO } });
    }
  
    async getActivoById(id: number): Promise<Monitor> {
      return await this.repository.findOne(id, {
        where: { status: Status.ACTIVO },
      });
    }
}