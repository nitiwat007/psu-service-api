import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'

const gradeType = new GraphQLObjectType({
    name: 'Grade',
    description: 'Student Grade Infomation',
    fields: () => ({
        STUDENT_ID: {
            type: GraphQLString,
            description: 'Student ID'
        },
        SUBJECT_ID: {
            type: GraphQLString,
            description: 'Subject ID'
        }
        ,
        SUBJECT_CODE: {
            type: GraphQLString,
            description: 'SUBJECT CODE'
        }
        ,
        SUBJECT_NAME_THAI: {
            type: GraphQLString,
            description: 'SUBJECT NAME THAI'
        }
        ,
        SUBJECT_NAME_ENG: {
            type: GraphQLString,
            description: 'SUBJECT NAME ENG'
        }
        ,
        SHORT_NAME_ENG: {
            type: GraphQLString,
            description: 'SHORT NAME ENG'
        },
        GRADE: {
            type: GraphQLString,
            description: 'GRADE'
        },
        EDU_TERM: {
            type: GraphQLString,
            description: 'Education Term'
        },
        EDU_YEAR: {
            type: GraphQLString,
            description: 'Education Year'
        }
    })
})

export default gradeType