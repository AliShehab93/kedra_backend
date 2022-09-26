const express = require('express')
const app = express()
const port = 3001
const locationFunctions = require('./functions/locationFunctions')
const unitFunctions = require('./functions/unitFunctions')
const compartmentFunctions = require('./functions/compartmentFunctions')
app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/locations', async (req, res) =>
    await locationFunctions.getLocations(req, res))

app.get('/units', async (req, res) =>
    await unitFunctions.getUnits(req, res))
app.post('/units', async (req, res) =>
    await unitFunctions.addUnit(req, res))
app.put('/units/:id', async (req, res) =>
    await unitFunctions.editUnit(req, res))
// app.get('/locations', async (req, res) =>
//     await locationModel.getLocations(req, res))
// app.get('/locations', async (req, res) =>
//     await locationModel.getLocations(req, res))

app.get('/compartments/:id', async (req, res) =>
    await compartmentFunctions.getCompartments(req, res))


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})