import express from 'express'
//import dotenv from 'dotenv'
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'
import graphqlHTTP from 'express-graphql'
import products from '../graphql/data'
import AppLogs from '../models/AppLogs'


//dotenv.config()
const router = express.Router()

var AppLogsData = AppLogs.find({ "action": "PSUPassport.GetUserDetails" }).then(data => data)


var productType = new GraphQLObjectType({
    name: "products",
    description: "Detail of The product",
    fields: () => ({
        name: {
            type: GraphQLString,
            description: "Name of the product",
        },
        price: {
            type: GraphQLInt,
            description: "price of product",
        },
        category: {
            type: new GraphQLList(GraphQLString),
            description: "category of product",
        }
    })
})

var queryType = new GraphQLObjectType({
    name: "queryProduct",
    description: "query of product",
    fields: () => ({
        hey: {
            type: GraphQLString,
            resolve: (_, args) => {
                return AppLogsData.then(data => data[0].username)
            }
        },
        getProducts: {
            type: new GraphQLList(productType),
            resolve: (_, args) => {
                return products
            }
        }
    })
})

const MyGraphQLSchema = new GraphQLSchema({
    query: queryType
})

router.use("/", graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
}))

router.use("/test", (req, res) => {
    AppLogsData.then(data => res.send(data))

})



export default router