import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/enums/status.enum';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Repository } from 'typeorm';
import { Computadora } from '../computadoras/computadoras.entity';
import { UpsDto } from './ups.dto';
import { Ups } from './ups.entity';

@Injectable()
export class UpsService<Ups> extends GenericService<Ups, UpsDto> {
    constructor(@InjectRepository(Ups) repository: Repository<Ups>) {
      super(repository);
    }
  
    async getActivos(): Promise<Ups[]> {
      return await this.repository.find({ where: { status: Status.ACTIVO } });
    }
  
    async getActivoById(id: number): Promise<Ups> {
      return await this.repository.findOne(id, {
        where: { status: Status.ACTIVO },
      });
    }
  }