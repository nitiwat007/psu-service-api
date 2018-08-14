import studentType from '../graphql/studentType'
import gradeType from '../graphql/gradeType'
import AdvisorType from '../graphql/advisorType'
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

const getStudentAdvisor = {
    type: GraphQLList(AdvisorType),
    args: {
        STUDENT_ID: {
            type: GraphQLString
        }
    },
    resolve: (_, args) => {
        return student.advisor(args.STUDENT_ID).then(data => data)
    }
}

export default {
    getStudentInfo: getStudentInfo,
    getStudentGrade: getStudentGrade,
    getStudentAdvisor: getStudentAdvisor
}