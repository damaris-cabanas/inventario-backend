import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotebookController } from './notebook.controller';
import { Notebook } from './notebook.entity';
import { NotebookService } from './notebook.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notebook])],
  providers: [NotebookService],
  controllers: [NotebookController],
})
export class NotebookModule {}
