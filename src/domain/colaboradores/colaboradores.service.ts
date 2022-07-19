import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Status } from 'src/enums/status.enum';
import { Colaboradores } from './colaboradores.entity';
import { ColaboradoresDto } from './colaboradores.dto';

@Injectable()
export class ColaboradoresService<Colaboradores> extends GenericService<Colaboradores, ColaboradoresDto> {
  constructor(@InjectRepository(Colaboradores) repository: Repository<Colaboradores>) {
    super(repository);
  }

  async getActivos(): Promise<Colaboradores[]> {
    return await this.repository.find({ where: { status: Status.ACTIVO } });
  }

  async getActivoById(id: number): Promise<Colaboradores> {
    return await this.repository.findOne(id, {
      where: { status: Status.ACTIVO },
    });
  }
}
