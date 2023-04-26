import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserInput {
    @Field()
    customerId: string;

    @Field()
    name: string;

    @Field()
    email: string;
};