const getSuccessResponses = (res, data) => {
    return res.status(200).send({
        'payload': data
    })
}

const getErrorResponses = (res, data) => {
    return res.status(200).send({
        'error': data.toString()
    })
}

module.exports = { getSuccessResponses, getErrorResponses }