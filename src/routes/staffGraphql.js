import express from 'express'
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'
import graphqlHTTP from 'express-graphql'
import staffQueryFields from '../graphql/staffQueryFields'

const router = express.Router()

const queryType = new GraphQLObjectType({
    name: 'GetStaffInfomation',
    description: 'Get Staff infomation PSU Phuket',
    fields: () => ({
        getStaffByFacID:staffQueryFields.getStaffByFacID
    })
})

const StaffGraphQLSchema = new GraphQLSchema({
    query: queryType
})

router.use("/", graphqlHTTP({
    schema: StaffGraphQLSchema,
    graphiql: true
}))


export default router