import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { TodosService } from '../todos.service';
import { Todos, UpdateTodos } from '../entities/todos.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async findAll(@Res() res) {
    const todos = await this.todosService.findAll();
    return res.status(HttpStatus.OK).json(todos);
  }

  @Get(':id')
  async findOne(@Param('id') id, @Res() res) {
    const todos = await this.todosService.findOne(id);
    return res.status(HttpStatus.OK).json(todos);
  }

  @Post()
  async create(@Body() todos: Todos, @Res() res) {
    console.log(todos);
    const newTodos = await this.todosService.create(todos);
    return res.status(HttpStatus.OK).json(newTodos);
  }

  @Post(':id')
  async update(@Param('id') id, @Body() todos: UpdateTodos, @Res() res) {
    const updatedTodos = await this.todosService.update(id, todos);
    return res.status(HttpStatus.OK).json(updatedTodos);
  }

  @Post(':id/delete')
  async delete(@Param('id') id, @Res() res) {
    const deletedTodos = await this.todosService.delete(id);
    return res.status(HttpStatus.OK).json(deletedTodos);
  }
}
