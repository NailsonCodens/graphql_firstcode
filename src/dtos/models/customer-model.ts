import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CustomerModel{
    @Field()
    name: string;

    @Field()
    user: string;
};