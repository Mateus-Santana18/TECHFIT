// const express = require('express')
import  Express  from 'express'
// Index das routes
// const routes = require('./routes')
import Routes from 'routes'

const app = Express()

const PORT = 3333

app.use(Express.json())

app.use(Routes)

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))