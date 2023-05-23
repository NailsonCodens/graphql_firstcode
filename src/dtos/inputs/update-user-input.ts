import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateUserInput {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    email: string;
};