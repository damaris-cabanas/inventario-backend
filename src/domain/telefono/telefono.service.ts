import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Status } from 'src/enums/status.enum';
import { TelefonoDto } from './telefono.dto';
import { Telefono } from './telefono.entity';

@Injectable()
export class TelefonoService<Telefono> extends GenericService<Telefono, TelefonoDto> {
  constructor(@InjectRepository(Telefono) repository: Repository<Telefono>) {
    super(repository);
  }

  async getActivos(): Promise<Telefono[]> {
    return await this.repository.find({ where: { status: Status.ACTIVO } });
  }

  async getActivoById(id: number): Promise<Telefono> {
    return await this.repository.findOne(id, {
      where: { status: Status.ACTIVO },
    });
  }
}
