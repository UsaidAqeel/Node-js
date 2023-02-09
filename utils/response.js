const response = {
    // Thats over succes response function without data
    getResponseSucces: (statusCode, message, res) => {
        return res.status(statusCode).json({
            message
        })
    },
    // Thats over error response function without data
    errorResponse: (statusCode, message, res) => {
        return res.status(statusCode).json({
            message
        })
    }
}

module.exports = response