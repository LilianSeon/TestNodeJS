const express = require('express');

const app = express();
const v1 = express.Router();
const fs = require('fs').promises;

const PeopleService = require('./people-service');
const peopleService = new PeopleService();


app.use('/api/v1', v1);

v1.put('/people', async (request, response) => {

    const people = request.body;
    const updatedPeople = await peopleService.updatePeople(people);
    response.send(updatedPeople);
    
});

v1.get('/people', async (request, response) => {
    const listPeople = await peopleService.getPeople();
    response.send(listPeople);
});

// To be implemented!

module.exports = app;
