import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat
} from 'graphql'

const gpaType = new GraphQLObjectType({
    name: 'GPA',
    description: 'Student GPA Infomation',
    fields: () => ({
        STUDENT_ID: {
            type: GraphQLString,
            description: 'Student ID'
        },
        EDU_TERM: {
            type: GraphQLString,
            description: 'EDU TERM'
        }
        ,
        EDU_YEAR: {
            type: GraphQLString,
            description: 'EDU YEAR'
        }
        ,
        SEM_GPA: {
            type: GraphQLFloat,
            description: 'SEM GPA'
        }
        ,
        CUM_GPA: {
            type: GraphQLFloat,
            description: 'CUM GPA'
        }
    })
})

export default gpaType