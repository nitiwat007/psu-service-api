import express from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import axios from 'axios'

dotenv.config()
const router = express.Router()
const url = process.env.TIME_ATTENDANCE_URL

router.get("/events", (req, res) => {
    const ApplicationID = (req.headers.applicationid) ? req.headers.applicationid : ''
    axios.get(url + '/api/events', { headers: { 'applicationid': ApplicationID } }).then(response => {
        res.send(response.data)
    }).catch(error => {
        if (error.response.status === 404) {
            res.status(404).send(error.response.data)
        }
    })
})

router.get("/:MemberID/events", (req, res) => {
    const ApplicationID = (req.headers.applicationid) ? req.headers.applicationid : ''
    const MemberID = req.params.MemberID
    axios.get(url + '/api/' + MemberID + '/events', { headers: { 'applicationid': ApplicationID } }).then(response => {
        res.send(response.data)
    }).catch(error => {
        if (error.response.status === 404) {
            res.status(404).send(error.response.data)
        }
    })
})

router.get("/events/:EventID", (req, res) => {
    const ApplicationID = (req.headers.applicationid) ? req.headers.applicationid : ''
    const EventID = req.params.EventID
    axios.get(url + '/api/events/' + EventID, { headers: { 'applicationid': ApplicationID } }).then(response => {
        res.send(response.data)
    }).catch(error => {
        if (error.response.status === 404) {
            res.status(404).send(error.response.data)
        }
    })
})

router.get("/:MemberID/events/:EventID", (req, res) => {
    const ApplicationID = (req.headers.applicationid) ? req.headers.applicationid : ''
    const MemberID = req.params.MemberID
    const EventID = req.params.EventID
    axios.get(url + '/api/' + MemberID + '/events/' + EventID, { headers: { 'applicationid': ApplicationID } }).then(response => {
        res.send(response.data)
    }).catch(error => {
        if (error.response.status === 404) {
            res.status(404).send(error.response.data)
        }
    })
})

router.get("/:MemberID/events/:EventID/schedules", (req, res) => {
    const ApplicationID = (req.headers.applicationid) ? req.headers.applicationid : ''
    const MemberID = req.params.MemberID
    const EventID = req.params.EventID
    axios.get(url + '/api/' + MemberID + '/events/' + EventID + '/schedules', { headers: { 'applicationid': ApplicationID } }).then(response => {
        res.send(response.data)
    }).catch(error => {
        if (error.response.status === 404) {
            res.status(404).send(error.response.data)
        }
    })
})

router.get("/:MemberID/events/:EventID/schedules/:ScheduleID", (req, res) => {
    const ApplicationID = (req.headers.applicationid) ? req.headers.applicationid : ''
    const MemberID = req.params.MemberID
    const EventID = req.params.EventID
    const ScheduleID = req.params.ScheduleID
    axios.get(url + '/api/' + MemberID + '/events/' + EventID + '/schedules/' + ScheduleID, { headers: { 'applicationid': ApplicationID } }).then(response => {
        res.send(response.data)
    }).catch(error => {
        if (error.response.status === 404) {
            res.status(404).send(error.response.data)
        }
    })
})

router.post("/:MemberID/events/:EventID/schedules/:ScheduleID/checkIn", (req, res) => {
    const ApplicationID = (req.headers.applicationid) ? req.headers.applicationid : ''
    const MemberID = req.params.MemberID
    const EventID = req.params.EventID
    const ScheduleID = req.params.ScheduleID
    const Data = req.body
    axios.post(url + '/api/' + MemberID + '/events/' + EventID + '/schedules/' + ScheduleID + '/checkIn', Data, { headers: { 'applicationid': ApplicationID } }).then(response => {
        res.send(response.data)
    }).catch(error => res.status(404).send(error.response.data))
})

export default router