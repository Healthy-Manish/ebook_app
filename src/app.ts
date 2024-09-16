// import exp from 'constants'
import express from 'express'

const app = express()

// Routes
// http methods : GET, POST, PUT, PATCH, DELETE
app.get('/',(req,res)=>{
    res.json({message: "Welcome to ebook api"});

})

export default app