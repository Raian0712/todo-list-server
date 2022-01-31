import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class TodosInput {
  @Field(() => ID)
  id: string;

  @Field()
  text: string;

  @Field()
  completed: boolean;

  @Field()
  createdAt: string;
}
