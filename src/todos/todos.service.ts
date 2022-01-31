import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todos, UpdateTodos } from './entities/todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todos)
    private readonly todosRepository: Repository<Todos>,
  ) {}

  async findAll(): Promise<Todos[]> {
    return await this.todosRepository.find();
  }

  async findOne(id: number): Promise<Todos> {
    return await this.todosRepository.findOne(id);
  }

  async create(todos: Todos): Promise<Todos> {
    return await this.todosRepository.save(todos);
  }

  //updates the todo item with the given id and Updates the todo item with the given id
  async update(id: number, todos: UpdateTodos): Promise<Todos> {
    const todo = await this.todosRepository.findOne(id);
    todo.text = todos.text;
    todo.completed = todos.completed;
    return await this.todosRepository.save(todo);
  }

  // async update(id: number, todos: UpdateTodos): Promise<Todos> {
  //   await this.todosRepository.update(id, todos);
  //   return await this.todosRepository.findOne(id);
  // }

  async delete(id: number): Promise<Todos> {
    const todos = await this.todosRepository.findOne(id);
    await this.todosRepository.delete(id);
    return todos;
  }
}
