const {getSuccessResponses, getErrorResponses} = require("../responses");
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});


const getUnits = async (req, res) => {
    try {
        let response = await pool.query('' +
            'SELECT u.id, u."macAddress", u.name, u.capacity as "unitCapacity", u."locationId", ' +
            'l."address" as "locationAddress", l."macAddress" as "locationMacAddress" ' +
            'FROM "Units" u left join "Locations" l on u."locationId" = l.id ORDER By u.id ASC' +
            '');
        return getSuccessResponses(res, response.rows);
    } catch (e) {
        return getErrorResponses(res, e);
    }
}

const addUnit = async (req, res) => {
    try {
        const { name, macAddress, capacity, locationId } = req.body
        let response = await pool.query('' +
            'INSERT INTO "Units" (name, "macAddress", capacity, "locationId") VALUES ($1, $2, $3, $4) RETURNING *',
            [name, macAddress, capacity, locationId]);
        return getSuccessResponses(res, response.rows[0]);
    } catch (e) {
        console.log('eeee ', e);
        return getErrorResponses(res, e);
    }
}

const editUnit = async (req, res) => {
    try {
        const { name, macAddress, capacity, locationId } = req.body
        const id = parseInt(req.params.id);
        let response = await pool.query('' +
            `UPDATE "Units" Set name = '${name}', \"macAddress\" = '${macAddress}', 
                   capacity = ${capacity}, "locationId" = ${locationId} where id = $1`, [id]);
        return getSuccessResponses(res, response);
    } catch (e) {
        console.log('eeee ', e);
        return getErrorResponses(res, e);
    }
}

module.exports = {
    getUnits, addUnit, editUnit
}