import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class TodosType {
  @Field(() => ID)
  id: string;

  @Field()
  text: string;

  @Field()
  completed: boolean;

  @Field()
  createdAt: string;
}
