const sendResponse = (res, status, message, payload) => {
    return res.status(status).json({
        status, message, payload
    });
};

module.exports = sendResponse;