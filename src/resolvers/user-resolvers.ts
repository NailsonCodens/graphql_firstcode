
import { Mutation, Query, Resolver, Arg, FieldResolver, Root } from "type-graphql"
import { CreateUserInput } from "../dtos/inputs/create-user-input";
import { UserModal } from "../dtos/models/user-model";
import { CustomerModel } from "../dtos/models/customer-model";

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
        const user = {
            customerId: data.customerId,
            name: data.name,
            email: data.email            
        }

        return user;
    }


    @FieldResolver(() => CustomerModel)
    async customer(@Root() user: UserModal){
        console.log(user);

        return {
            name: 'Teste',
            user: 'Bobão'
        }
    }

};