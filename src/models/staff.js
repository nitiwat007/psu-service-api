import dotenv from 'dotenv'
import oracledb from 'oracledb'
import { resolve } from 'dns';
import { connect } from 'tls';
import { connection } from 'mongoose';

dotenv.config()

var staff = (STAFF_ID) => {
    return new Promise(
        (resolve, reject) => {
            oracledb.getConnection({
                user: process.env.ORACLE_PERSONEL_USER,
                password: process.env.ORACLE_PERSONEL_PASS,
                connectString: process.env.ORACLE_PERSONEL_CONNECTION_STRING
            },
                (err, connection) => {
                    if(err){
                        console.log(err.message)
                        return
                    }
                    connection.execute(
                        "select" +
                        " personel.STAFF_ID",
                        " ,personel.STAFF_NAME_THAI" +
                        " ,personel.STAFF_SNAME_THAI" +
                        "  from personel.P_STAFF" +
                        ""
                    )
                }
            )
        }
    )
}