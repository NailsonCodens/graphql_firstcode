import "reflect-metadata";
import { ApolloServer } from "@apollo/server"; 
import { startStandaloneServer } from "@apollo/server/standalone"
import { buildSchema } from "type-graphql";
import { UsersResolvers } from "./resolvers/user-resolvers";

async function boostrap (){
    const schema = await buildSchema({
        resolvers: [UsersResolvers],
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await startStandaloneServer(server, {
        listen:{
            port: 4000
        }
    });
    
    console.log(`🚀  Server ready at: ${url}`);
}

boostrap();