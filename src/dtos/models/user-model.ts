import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserModal{
    @Field()
    customerId: string;

    @Field()
    name: string;

    @Field()
    email: string;
}