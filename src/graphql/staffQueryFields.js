import staffType from '../graphql/staffType'

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'
import staff from '../models/staff'

const getStaffByFacID = {
    type: GraphQLList(staffType),
    args: {
        FAC_ID: {
            type: GraphQLString
        }
    },
    resolve: (_, args) => {
        return staff.staffbyfac(args.FAC_ID).then(data => data)
    }
}

export default {
    getStaffByFacID:getStaffByFacID
}