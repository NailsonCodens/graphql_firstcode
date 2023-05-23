import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserModal{
    @Field()
    id: string;

    @Field()
    customerId: string;

    @Field()
    name: string;

    @Field()
    email: string;
}