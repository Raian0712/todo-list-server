import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { InputType, Field, ID } from '@nestjs/graphql';

@Entity()
export class Todos {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  text: string;

  @Column({ default: false })
  completed: boolean;

  @Column()
  createdAt: string;
}

@InputType()
export class UpdateTodos {
  @Field()
  text: string;

  @Field()
  completed: boolean;
}
