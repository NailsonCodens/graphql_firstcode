
import { Mutation, Query, Resolver, Arg, FieldResolver, Root } from "type-graphql"
import { CreateUserInput } from "../dtos/inputs/create-user-input";
import { UserModal } from "../dtos/models/user-model";
import { CustomerModel } from "../dtos/models/customer-model";
import {Schema, connect, model} from 'mongoose'

interface IUser {
    name: string;
    email: string;
    age: number;
}

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true}
})

const User = model<IUser>('User', userSchema)

@Resolver(() => UserModal)
export class UsersResolvers{
    @Query(returns => UserModal)
    async helloWord(){
        const teste = {
            clientId: "sadsad",
            name: "teste",
            email: "adssadsa"      
        };

        return teste;
    }

    @Mutation(() => UserModal)
    async createUser(@Arg("data") data: CreateUserInput){
        console.log('asdsa');

        connect("mongodb://graphql:Gp4fhQ1@localhost:27017/graphql?directConnection=true&authSource=admin");


        const user = {
            customerId: data.customerId,
            name: data.name,
            email: data.email            
        }

        const teste = new User({
            name: 'Bill',
            email: 'bill@initech.com',
            age: 22
          });
          await teste.save();

          console.log(teste);

        console.log(teste.email);

        return user;
    }


    @FieldResolver(() => CustomerModel)
    async customer(@Root() user: UserModal){
        return {
            name: 'Teste',
            user: 'Bobão'
        }
    }

};