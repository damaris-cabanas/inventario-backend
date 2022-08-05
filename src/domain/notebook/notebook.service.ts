import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/enums/status.enum';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Repository } from 'typeorm';
import { NotebookDto } from './notebook.dto';
import { Notebook } from './notebook.entity';

@Injectable()
export class NotebookService<Notebook> extends GenericService<Notebook, NotebookDto> {
    constructor(@InjectRepository(Notebook) repository: Repository<Notebook>) {
      super(repository);
    }
  
    async getActivos(): Promise<Notebook[]> {
      return await this.repository.find({ where: { status: Status.ACTIVO } });
    }
  
    async getActivoById(id: number): Promise<Notebook> {
      return await this.repository.findOne(id, {
        where: { status: Status.ACTIVO },
      });
    }
}