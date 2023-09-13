const express = require("express")
const mongoose = require("mongoose")
const Person = require("./models/Person")

// init express app
const app = express()

const dbURI = "mongodb://127.0.0.1:27017/people"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err))




app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.json({"contact": "Hello"})
})


// CREATE
app.post('/api', async (req, res) => {
    const payload = req.body.name
    console.log(payload)
    if(payload){
        try{
            let newPerson =  await Person.create({
                name: payload
            })

            res.json(newPerson)
        }catch(err){
            console.log(err.message)
            res.json({error: err.message})
        }
    }else{
        // console.log(err.message)
        res.json({error: "name is required"})
    }
})


// UPDATE
app.post('/api/:id', async (req, res) => {
    const id = req.params.id
    const payload = req.body.name
    console.log(payload)

    if(payload){
        try{
            let newPerson =  await Person.findOne({
                _id: id
            })

            newPerson.name = payload
            await newPerson.save()
            res.json(newPerson)
        }catch(err){
            console.log(err.message)
            res.json({error: err.message})
        }
    }else{
        // console.log(err.message)
        res.json({error: "name is required"})
    }
})


// READ
app.get('/api/:id', async (req, res) => {
    payload = {_id: req.params.id}
    console.log(payload)

    if (payload){
        try{
            let getPerson = await Person.findOne(payload)

            console.log(getPerson)
            res.json(getPerson)
        }catch(err){
            console.log(err.message)
            res.json({error: err.message})
        }
    }else{
        // console.log(err.message)
        res.json({error: "name is required"})
    }

})



// DELETE
app.delete('/api/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)

    if(id){
        try{
            await Person.findOneAndDelete({
                _id: id
            })

            // await newPerson.save()
            console.log('done del')
            res.json({"message": "Person deleted Successfully!"})
        }catch(err){
            console.log(err.message)
            res.json({error: err.message})
        }
    }else{
        // console.log(err.message)
        res.json({error: "name is required"})
    }
})




// app.get('/api/:id', async (req, res) => {
//     userId = req.params.id
//     getUser = await fetch(`http://localhost:5000/people/${userId}`)
//                 .then((res) => {
//                     return res.json()
//                 })
//                 .then((data) => {
//                     return data
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//     user = getUser

//     console.log('user= ', user)
//     res.json(user)
// })

// app.post('api/', (req, res) => {
//     const payload = req.body.name
//     console.log(req.body)
    
//     fetch("http://localhost:5000/people/", payload)
//     .then(res => {
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//         res.json(data)
//     })
//     .catch(err => {
//         console.log(err)
//         res.json(err)
//     })
// })