const { STATUS_CODES } = require('../../constants/statusCodes');
const sendResponse = require('../../helpers/sendResponse');
const messages = require('../../constants/messages');
const { fetchUsers } = require('./users.service');
const { add } = require('./users.service');


const getAllUsers = async (req, res) => {
    try {
        const users = await fetchUsers();
        sendResponse(res, STATUS_CODES.SUCCESS, messages.ALL_USERS, users);
    } catch (error) {
        sendResponse(res, STATUS_CODES.BAD_REQUEST, messages.SERVER_ERROR);
    }
}

const addUser = async (req, res) => {
    try {
        const user = await add(req.body);
        sendResponse(res, STATUS_CODES.SUCCESS, messages.ALL_USERS, user);
    } catch (error) {
        console.log('error', error.errors.name);
        if (error._message) {
            sendResponse(res, STATUS_CODES.BAD_REQUEST, error._message);
        } else {
            sendResponse(res, STATUS_CODES.BAD_REQUEST, messages.SERVER_ERROR);
        }
    }
}

module.exports = { getAllUsers, addUser };