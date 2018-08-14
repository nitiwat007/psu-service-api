import dotenv from 'dotenv'
import oracledb from 'oracledb'
import { resolve } from 'dns';
import { connect } from 'tls';
import { connection } from 'mongoose';

dotenv.config()

var staffbyfac = (FAC_ID) => {
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
                        " personel.p_staff.STAFF_ID" +
                        " ,personel.p_staff.STAFF_NAME_THAI" +
                        " ,personel.p_staff.STAFF_SNAME_THAI" +
                        " ,personel.p_staff.STAFF_NAME_ENG" +
                        " ,personel.p_staff.STAFF_SNAME_ENG" +
                        " ,personel.p_staff.STAFF_SNAME_ENG" +
                        " ,personel.p_staff.FAC_ID" +
                        "  from personel.P_STAFF" +
                        " where personel.p_staff.FAC_ID=:FAC_ID and STAFF_DEPART='3'",[FAC_ID],
                        {
                            outFormat: oracledb.OBJECT
                        },
                        (err, result) => {
                            if (err) {
                                reject(err.message)
                                doRelease(connection)
                                return
                            }
                            resolve(result.rows)
                            doRelease(connection)
                        }
                    )
                }
            )
        }
    )
}

function doRelease(connection) {
    connection.close(
        function (err) {
            if (err)
                //console.error(err.message);
                return err
        }
    );
}

export default {
    staffbyfac:staffbyfac
}