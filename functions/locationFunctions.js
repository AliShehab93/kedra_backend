const {getSuccessResponses, getErrorResponses} = require("../responses");
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

const getLocations = async (req, res) => {
    try {
        let response = await pool.query('SELECT * FROM "Locations"');
        return getSuccessResponses(res, response.rows);
    } catch (e) {
        return getErrorResponses(res, e);
    }
}

module.exports = {
    getLocations,
}