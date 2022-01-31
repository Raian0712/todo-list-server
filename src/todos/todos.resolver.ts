import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { TodosInput } from './input-todos.input';
import { TodosType } from './dto/create-todo.dto';
import { UpdateTodos } from './entities/todos.entity';

@Resolver((of) => TodosType)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query((returns) => [TodosType])
  async todos() {
    return await this.todosService.findAll();
  }

  @Query((returns) => TodosType)
  async todo(@Args('id') id: number) {
    return await this.todosService.findOne(id);
  }

  @Mutation((returns) => TodosType)
  async createTodo(@Args('todo') todo: TodosInput) {
    return await this.todosService.create(todo);
  }

  @Mutation((returns) => TodosType)
  async updateTodo(@Args('id') id: number, @Args('todo') todo: UpdateTodos) {
    return await this.todosService.update(id, todo);
  }

  @Mutation((returns) => TodosType)
  async deleteTodo(@Args('id') id: number) {
    return await this.todosService.delete(id);
  }
}
