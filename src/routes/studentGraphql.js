import express from 'express'
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'
import graphqlHTTP from 'express-graphql'
import studentQueryFields from '../graphql/studentQueryFields'

const router = express.Router()

const queryType = new GraphQLObjectType({
    name: 'GetStudentInfomation',
    description: 'Get student infomation PSU Phuket',
    fields: () => ({
        getStudentInfo: studentQueryFields.getStudentInfo,
        getStudentGrade: studentQueryFields.getStudentGrade,
        getStudentAdvisor: studentQueryFields.getStudentAdvisor
    })
})

const StudentGraphQLSchema = new GraphQLSchema({
    query: queryType
})

router.use("/", graphqlHTTP({
    schema: StudentGraphQLSchema,
    graphiql: true
}))

export default router