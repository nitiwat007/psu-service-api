import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'

const staffType = new GraphQLObjectType({
    name: 'Staff',
    description: 'Psu Staff Infomation',
    fields: () => ({
        STAFF_ID : {
            type:GraphQLString,
            description:'ID of staff'
        },
        STAFF_NAME_THAI:{
            type: GraphQLString,
            description:'Firstname thai of staff'
        },
        STAFF_SNAME_THAI:{
            type: GraphQLString,
            description:'Lastname thai of staff'
        },
        STAFF_NAME_ENG:{
            type: GraphQLString,
            description:'Firstname eng of staff'
        },
        STAFF_SNAME_ENG:{
            type: GraphQLString,
            description:'Lastname eng of staff'
        },
        FAC_ID:{
            type: GraphQLString,
            description:'FacID  of staff'
        },
    })
})

export default staffType