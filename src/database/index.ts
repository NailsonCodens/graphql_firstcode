import {connect} from "mongoose";

async function database(){
  return connect("mongodb://graphql:Gp4fhQ1@localhost:27017/graphql?directConnection=true&authSource=admin");

}

export { database }