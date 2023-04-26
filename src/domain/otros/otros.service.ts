import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/enums/status.enum';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Repository } from 'typeorm';
import { OtrosDto } from './otros.dto';
import { Otros } from './otros.entity';

@Injectable()
export class OtrosService<Otros> extends GenericService<Otros, OtrosDto> {
    constructor(@InjectRepository(Otros) repository: Repository<Otros>) {
      super(repository);
    }
  
    async getActivos(): Promise<Otros[]> {
      return await this.repository.find({ where: { status: Status.OK } });
    }
  
    async getActivoById(id: number): Promise<Otros> {
      return await this.repository.findOne(id, {
        where: { status: Status.OK },
      });
    }
  }

