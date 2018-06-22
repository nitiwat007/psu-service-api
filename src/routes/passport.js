import express from 'express'
import soap from 'soap'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import AppLogs from '../models/AppLogs'
import mongoose from 'mongoose'

dotenv.config()
const router = express.Router()
const url = process.env.PSUPASSPORT_URL

router.post("/Authenticate", (req, res) => {
    const credentials = { 'username': req.headers.username, 'password': req.headers.password }
    const ipRequest = req.connection.remoteAddress.split(':').pop()
    ApplicationLogs(req.headers.username,ipRequest,'PSUPassport.Authenticate')
    soap.createClient(url, (err, client) => {
        if(err){
            res.status(400).json({ errors: "can not connect psu passport service." })
        }else{
            client.Authenticate(credentials, (err, result) => {
                if (result.statusCode === 500) {
                    res.status(400).json({ errors: { global: "Invalid credential" } })
                } else {
                    result.token = generateToken(req.headers.username)
                    res.json(result)
                }
            })
        }      
    })
})

router.post("/GetStaffDetails", (req, res) => {
    const credentials = { 'username': req.headers.username, 'password': req.headers.password }
    const ipRequest = req.connection.remoteAddress.split(':').pop()
    ApplicationLogs(req.headers.username,ipRequest,'PSUPassport.GetStaffDetails')
    soap.createClient(url, (err, client) => {
        if(err){
            res.status(400).json({ errors: "can not connect psu passport service." })
        }else{
            client.GetStaffDetails(credentials, (err, result) => {
                if (result.statusCode === 500) {
                    res.status(400).json({ errors: { global: "Invalid credential" } })
                } else {
                    result.token = generateToken(req.headers.username)
                    res.json(result)
                }
            })
        }      
    })
})

router.post("/GetStaffID", (req, res) => {
    const credentials = { 'username': req.headers.username, 'password': req.headers.password }
    const ipRequest = req.connection.remoteAddress.split(':').pop()
    ApplicationLogs(req.headers.username,ipRequest,'PSUPassport.GetStaffID')
    soap.createClient(url, (err, client) => {
        if(err){
            res.status(400).json({ errors: "can not connect psu passport service." })
        }else{
            client.GetStaffID(credentials, (err, result) => {
                if (result.statusCode === 500) {
                    res.status(400).json({ errors: { global: "Invalid credential" } })
                } else {
                    result.token = generateToken(req.headers.username)
                    res.json(result)
                }
            })
        }      
    })
})

router.post("/GetStudentDetails", (req, res) => {
    const credentials = { 'username': req.headers.username, 'password': req.headers.password }
    const ipRequest = req.connection.remoteAddress.split(':').pop()
    ApplicationLogs(req.headers.username,ipRequest,'PSUPassport.GetStudentDetails')
    soap.createClient(url, (err, client) => {
        if(err){
            res.status(400).json({ errors: "can not connect psu passport service." })
        }else{
            client.GetStudentDetails(credentials, (err, result) => {
                if (result.statusCode === 500) {
                    res.status(400).json({ errors: { global: "Invalid credential" } })
                } else {
                    result.token = generateToken(req.headers.username)
                    res.json(result)
                }
            })
        }      
    })
})

router.post("/GetUserDetails", (req, res) => {
    const credentials = { 'username': req.headers.username, 'password': req.headers.password }
    const ipRequest = req.connection.remoteAddress.split(':').pop()
    ApplicationLogs(req.headers.username,ipRequest,'PSUPassport.GetUserDetails')
    soap.createClient(url, (err, client) => {
        if(err){
            res.status(400).json({ errors: "can not connect psu passport service." })
        }else{
            client.GetUserDetails(credentials, (err, result) => {
                if (result.statusCode === 500) {
                    res.status(400).json({ errors: { global: "Invalid credential" } })
                } else {
                    result.token = generateToken(req.headers.username)
                    res.json(result)
                }
            })
        }      
    })
})

const ApplicationLogs = (username, ip, action) => {
    const Logs = new AppLogs({
        username: username,
        ip: ip,
        action: action
    })
    Logs.save((err, Logs) => {
        if (err) return console.log(err);
    })
}

const generateToken = (username) => {
    const generateJWT = jwt.sign({
        username: username
    }, process.env.JWT_SECRET)

    return generateJWT

}

export default router