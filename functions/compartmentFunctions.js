const {getSuccessResponses, getErrorResponses} = require("../responses");
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});


const getCompartments = async (req, res) => {
    try {
        const unitId = parseInt(req.params.id)
        let response = await pool.query('SELECT * FROM "Compartments" where "unitId" = $1', [unitId]);
        return getSuccessResponses(res, response.rows);
    } catch (e) {
        return getErrorResponses(res, e);
    }
}

module.exports = {
    getCompartments,
}