import express from 'express'
import readXlsxFile from 'read-excel-file/node'

const router = express.Router()

router.get("/read", (req, res) => {
    readXlsxFile('./assets/ใบเสร็จรับเงินทั้งหมด.xlsx').then((rows) => {
        res.json(rows.length)
    }).catch(error => console.log('Error', error))
})


export default router