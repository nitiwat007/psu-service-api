import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'

const advisorType = new GraphQLObjectType({
    name: 'Advisor',
    description: 'Student Advisor Information',
    fields: () => ({
        STUDENT_ID: {
            type: GraphQLString,
            description: 'Student ID'
        },
        ADVISER_ID: {
            type: GraphQLString,
            description: 'Advisor ID'
        },
        TITLE_NAME_THAI: {
            type: GraphQLString,
            description: 'TITLE NAME THAI'
        },
        TITLE_NAME_ENG: {
            type: GraphQLString,
            description: 'TITLE NAME ENG'
        },
        ADVISOR_NAME_THAI: {
            type: GraphQLString,
            description: 'ADVISOR NAME THAI'
        },
        ADVISOR_SNAME_THAI: {
            type: GraphQLString,
            description: 'ADVISOR SNAME THAI'
        },
        ADVISOR_NAME_ENG: {
            type: GraphQLString,
            description: 'ADVISOR NAME ENG'
        },
        ADVISOR_SNAME_ENG: {
            type: GraphQLString,
            description: 'ADVISOR SNAME ENG'
        },
        BEGIN_DATE: {
            type: GraphQLString,
            description: 'Begin Date'
        },
        END_DATE: {
            type: GraphQLString,
            description: 'End Date'
        },
        IS_THESIS_ADVISER: {
            type: GraphQLString,
            description: 'IS THESIS ADVISER'
        },
        ADVISER_ORDER: {
            type: GraphQLString,
            description: 'ADVISER ORDER'
        },
    })
})


export default advisorType