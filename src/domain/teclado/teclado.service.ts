import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/enums/status.enum';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Repository } from 'typeorm';
import { TecladoDto } from './teclado.dto';
import { Teclado } from './teclado.entity';

@Injectable()
export class TecladoService<Teclado> extends GenericService<Teclado, TecladoDto> {
    constructor(@InjectRepository(Teclado) repository: Repository<Teclado>) {
      super(repository);
    }
  
    async getActivos(): Promise<Teclado[]> {
      return await this.repository.find({ where: { status: Status.ACTIVO } });
    }
  
    async getActivoById(id: number): Promise<Teclado> {
      return await this.repository.findOne(id, {
        where: { status: Status.ACTIVO },
      });
    }
  }