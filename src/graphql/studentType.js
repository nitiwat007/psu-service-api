import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'

const studentType = new GraphQLObjectType({
    name: 'Student',
    description: 'Student Infomation',
    fields: () => ({
        STUDENT_ID: {
            type: GraphQLString,
            description: 'ID of student'
        },
        STUD_NAME_THAI: {
            type: GraphQLString,
            description: 'Firstname thai of student'
        },
        STUD_SNAME_THAI: {
            type: GraphQLString,
            description: 'Lastname thai of student'
        },
        STUD_NAME_ENG: {
            type: GraphQLString,
            description: 'Firstname english of student'
        },
        STUD_SNAME_ENG: {
            type: GraphQLString,
            description: 'Lastname english of student'
        },
        STUDY_STATUS: {
            type: GraphQLString,
            description: 'Study status of student'
        },
        FAC_ID: {
            type: GraphQLString,
            description: 'Faculty ID of student'
        },
        DEPT_ID: {
            type: GraphQLString,
            description: 'Departmant ID of student'
        },
        MAJOR_ID: {
            type: GraphQLString,
            description: 'Major ID of student'
        },
        MAJOR_NAME_THAI: {
            type: GraphQLString,
            description: 'Major Name Thai of student'
        },
        MAJOR_NAME_ENG: {
            type: GraphQLString,
            description: 'Major Name English of student'
        },
        MAJOR_SHORT_THAI: {
            type: GraphQLString,
            description: 'Major Short Name Thai of student'
        },
        MAJOR_SHORT_ENG: {
            type: GraphQLString,
            description: 'Major Short Name English of student'
        },
        FAC_NAME_THAI: {
            type: GraphQLString,
            description: 'Faculty Name Thai of student'
        },
        FAC_NAME_ENG: {
            type: GraphQLString,
            description: 'Faculty Name English of student'
        }
    })
})

export default studentType