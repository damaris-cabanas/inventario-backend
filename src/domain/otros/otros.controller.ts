import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags, ApiNotFoundResponse, ApiOkResponse, ApiBadRequestResponse, ApiParam, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { Status } from 'src/enums/status.enum';
import { Otros } from './otros.entity';
import { OtrosService } from './otros.service';

@ApiTags('Otros')
@Controller('api/v1/otros')
export class OtrosController {
  constructor(private readonly service: OtrosService<Otros>) {}

  @Get()
  @ApiNotFoundResponse({
    status: 404,
    description: 'Sin registros para mostrar.',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna los registros existentes.',
  })
  // Obtener todos los registros
  async getAll() {
    const data = await this.service.getAll();
    if (data.length === 0)
      throw new NotFoundException('Sin registros para mostrar.');
    return data;
  }

  @Get('activo')
  @ApiNotFoundResponse({
    status: 404,
    description: 'Sin registros para mostrar.',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna los registros activos.',
  })
  async getActivo() {
    try {
      const data = await this.service.getActivos();
      if (data.length === 0)
        throw new NotFoundException('Sin registros para mostrar.');
      return data;
    } catch (error) {}
  }

  @Get(':id')
  @ApiNotFoundResponse({
    status: 404,
    description: 'Registro inexistente.',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna el registro solicitado.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Argumento inválido.' })
  @ApiParam({ name: 'id', required: true, type: Number })
  // Obtener unico registro por ID
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.getById(id);
    if (!data) throw new NotFoundException('Registro inexistente.');
    return data;
  }

  @Get('activo/:id')
  @ApiNotFoundResponse({
    status: 404,
    description: 'Registro inexistente.',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna el registro solicitado.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Argumento inválido.' })
  @ApiParam({ name: 'id', required: true, type: Number })
  async getActivoById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.getActivoById(id);
    if (!data) throw new NotFoundException('Registro inexistente.');
    return data;
  }

  @Post()
  @ApiBody({ type: Otros, required: true })
  @ApiCreatedResponse({
    status: 201,
    description: 'Retorna el registro insertado.',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Argumentos inválidos.',
  })
  // Insertar registro
  async create(@Body() dto: Otros) {
    try {
      const data = await this.service.create(dto);
      return { ok: true, message: 'Registro insertado', data };
    } catch (error) {
      console.error(error);
      return { ok: false, message: 'Error al insertar' };
    }
  }

  @Put(':id')
  @ApiBody({ type: Otros, required: true })
  @ApiParam({ name: 'id', required: true, type: Number })
  @ApiNotFoundResponse({ status: 404, description: 'Registro inexistente' })
  @ApiBadRequestResponse({ status: 400, description: 'Argumentos inválidos' })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna el registro actualizado',
  })
  // Actualizar registro
  async edit(@Param('id', ParseIntPipe) id: number, @Body() dto: Otros) {
    try {
      let data: any = await this.service.edit(id, dto);
      return {
        ok: true,
        message: 'Registro actualizado',
        data,
      };
    } catch (error) {
      console.error(error);
      return { ok: false, message: 'Error al actualizar' };
    }
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, type: Number })
  @ApiOkResponse({ status: 200, description: 'Retorna el registro eliminado.' })
  @ApiNotFoundResponse({ status: 404, description: 'Registro inexistente.' })
  @ApiBadRequestResponse({ status: 400, description: 'Argumento inválido.' })
  
  // Eliminar registro
  async delete(@Param('id') id: number) {
    try {
      const data: any = await this.service.getById(id);

      await this.service.edit(id, { ...data, status: Status.AVERIADO });
      return { ok: true, data, message: 'Registro eliminado' };
    } catch (error) {
      console.error(error);
      return { ok: false, message: error.message };
    }
  }
}