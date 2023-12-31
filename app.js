const express = require("express")
require('dotenv').config()
const mongoose = require("mongoose")
const Person = require("./models/Person")
var ObjectId = require('mongoose').Types.ObjectId;

// init express app
const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.listen(3000, () => console.log('Server Started'))






app.get('/ping', async (req, res) => {
    res.status(200).json({
        success: true,
        message: "pong",
    })
})


app.get('/', async (req, res) => {
    try{
        const persons = await Person.find()
        if(persons.length < 1){
            res.json({"hello": "No Person added yet!"})
        }
        res.json({'All people in DB': persons})
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})


// READ
app.get('/api/:user_id', getPerson, (req, res) => {
    res.json(res.person)
})


// CREATE
app.post('/api', async (req, res) => {
    const person = new Person({
        name: req.body.name
    })
    console.log(person)

    try{
        const newPerson =  await person.save()
        res.status(201).json(newPerson)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})


// UPDATE
app.patch('/api/:user_id', getPerson, async (req, res) => {
    if(req.body.name != null){
        res.person.name = req.body.name
    }

    try{
        const updatedPerson =  await res.person.save()
        res.json(updatedPerson)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})


// DELETE
app.delete('/api/:user_id', getPerson, async (req, res) => {
    try{
        console.log(res.person)
        await res.person.deleteOne()
        res.json({message: "Person deleted Successfully!"})
    }catch(err){
        res.status(200).json({error: err.message})
    }
})


async function getPerson(req, res, next){
    let person
    const param = req.params.user_id.trim()
    try{
        const objId = new ObjectId((!ObjectId.isValid(param)) ? "123456789012" : param);
        person = await Person.findOne({$or: [
            {_id: objId},
            {name: param}
        ]})

        if(person == null){
            return res.status(404).json({
                message: 'Cannot find person'
            })
        }
    }catch (err){
        return res.status(500).json({error: err.message})
    }

    res.person = person
    next()
}


app.use((req, res) => {
    res.status(404).json('404', { title: 'resource not found' });
  });