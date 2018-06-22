import dotenv from 'dotenv'
import oracledb from 'oracledb'

dotenv.config()

var student = (STUDENT_ID) => {
    return new Promise(
        (resolve, reject) => {
            oracledb.getConnection({
                user: process.env.ORACLE_REGIST2005NEW_USER,
                password: process.env.ORACLE_REGIST2005NEW_PASS,
                connectString: process.env.ORACLE_REGIST2005NEW_CONNECTION_STRING
            },
                (err, connection) => {
                    if (err) {
                        console.log(err.message)
                        return
                    }
                    connection.execute(
                        "select" +
                        " regist2005_new.student.STUDENT_ID" +
                        ",regist2005_new.student.STUD_NAME_THAI" +
                        ",regist2005_new.student.STUD_SNAME_THAI" +
                        ",regist2005_new.student.STUD_NAME_ENG" +
                        ",regist2005_new.student.STUD_SNAME_ENG" +
                        ",regist2005_new.student.STUDY_STATUS" +
                        ",regist2005_new.student.FAC_ID" +
                        ",regist2005_new.student.DEPT_ID" +
                        ",regist2005_new.student.MAJOR_ID" +
                        ",regist2005_new.major.MAJOR_NAME_THAI" +
                        ",regist2005_new.major.MAJOR_NAME_ENG" +
                        ",regist2005_new.major.MAJOR_SHORT_THAI" +
                        ",regist2005_new.major.MAJOR_SHORT_ENG" +
                        ",regist2005_new.faculty.FAC_NAME_THAI" +
                        ",regist2005_new.faculty.FAC_NAME_ENG" +
                        " from regist2005_new.student" +
                        " inner join regist2005_new.major" +
                        " on regist2005_new.student.major_id = regist2005_new.major.major_id" +
                        " inner join regist2005_new.faculty" +
                        " on regist2005_new.student.fac_id = regist2005_new.faculty.fac_id" +
                        " where regist2005_new.student.STUDENT_ID=:STUDENT_ID", [STUDENT_ID],
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

var grade = (STUDENT_ID) => {
    return new Promise(
        (resolve, reject) => {
            oracledb.getConnection({
                user: process.env.ORACLE_REGIST2005NEW_USER,
                password: process.env.ORACLE_REGIST2005NEW_PASS,
                connectString: process.env.ORACLE_REGIST2005NEW_CONNECTION_STRING
            },
                (err, connection) => {
                    if (err) {
                        console.log(err.message)
                        return
                    }
                    connection.execute(
                        "select" +
                        " regist2005_new.grade.STUDENT_ID" +
                        ",regist2005_new.grade.SUBJECT_ID" +
                        ",regist2005_new.subject.SUBJECT_CODE" +
                        ",TRIM(REPLACE(regist2005_new.subject.SUBJECT_NAME_THAI,'*','')) as SUBJECT_NAME_THAI" +
                        ",TRIM(REPLACE(regist2005_new.subject.SUBJECT_NAME_ENG,'*','')) as SUBJECT_NAME_ENG" +
                        ",regist2005_new.subject.SHORT_NAME_ENG" +
                        ",regist2005_new.grade.GRADE" +
                        ",regist2005_new.grade.EDU_TERM" +
                        ",regist2005_new.grade.EDU_YEAR" +
                        " from regist2005_new.grade" +
                        " inner join regist2005_new.subject" +
                        " on regist2005_new.grade.SUBJECT_ID = regist2005_new.subject.SUBJECT_ID" +
                        " where regist2005_new.grade.STUDENT_ID=:STUDENT_ID order by regist2005_new.grade.EDU_YEAR,regist2005_new.grade.EDU_TERM", [STUDENT_ID],
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
    student: student,
    grade: grade
}