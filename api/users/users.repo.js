const userModal = require('./users.model');

const list = async () => {
    return userModal.find({});
};

const getById = async (id) => {
    return userModal.findById(id);
}
const add = async (user) => {
    return userModal.insertMany(user);
}
module.exports = {
    list,
    getById,
    add,
}