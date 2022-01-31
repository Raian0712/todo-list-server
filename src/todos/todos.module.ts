import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './controllers/todos.controller';

import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';

import { Todos } from './entities/todos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todos])],
  providers: [TodosService, TodosResolver],
  controllers: [TodosController],
})
export class TodosModule {}
