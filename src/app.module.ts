import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Todos, UpdateTodos } from './todos/entities/todos.entity';
import { join } from 'path';

@Module({
  imports: [
    TodosModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '194673',
      database: 'todos',
      entities: [Todos, UpdateTodos],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
