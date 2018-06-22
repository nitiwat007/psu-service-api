import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Promise from 'bluebird'
//import dotenv from 'dotenv'
import cors from 'cors'

import passport from './routes/passport'
import event from './routes/event'
import student from './routes/student'
//import excel from './routes/excel'
import graphql from './routes/graphql'
import studentGraphql from './routes/studentGraphql'


const app = express()
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,username,password,applicationid');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// })
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.Promise = Promise
mongoose.connect(process.env.MONGODB_URL_APP_LOGS)


app.use("/api/passport", passport)
app.use("/api", event)
//app.use("/api/student", student)
app.use("/api/student", studentGraphql)
//app.use("/api/excel", excel)
app.use("/api/graphql", graphql)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(8000, () => console.log("Running on localhost:8000"))