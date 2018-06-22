import express from 'express'
import dotenv from 'dotenv'
import student from '../models/student'

dotenv.config()
const router = express.Router()

router.get("/:STUDENT_ID", (req, res) => {
    const STUDENT_ID = req.params.STUDENT_ID
    student(STUDENT_ID)
        .then(data => res.json(data))
        .catch(error => res.json({ error: error }))
})

export default router
