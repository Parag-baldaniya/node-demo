const repo = require('./users.repo');

const fetchUsers = async () => {
    return repo.list({});
};

const add = async (user) => {
    return repo.add(user);
};

module.exports = {
    fetchUsers, add
}