import studentType from '../graphql/studentType'
import gradeType from '../graphql/gradeType'
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'
import student from '../models/student'

const getStudentInfo = {
    type: GraphQLList(studentType),
    args: {
        STUDENT_ID: {
            type: GraphQLString
        }
    },
    resolve: (_, args) => {
        return student.student(args.STUDENT_ID).then(data => data)
    }
}

const getStudentGrade = {
    type: GraphQLList(gradeType),
    args: {
        STUDENT_ID: {
            type: GraphQLString
        }
    },
    resolve: (_, args) => {
        return student.grade(args.STUDENT_ID).then(data => data)
    }
}

export default {
    getStudentInfo: getStudentInfo,
    getStudentGrade: getStudentGrade
}