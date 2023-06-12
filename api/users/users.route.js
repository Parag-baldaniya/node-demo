const { Router } = require('express');
const router = Router();

const userController = require('./users.controller');

/**
 * @swagger
 *
 * /user/all:
 *   get:
 *     tags:
 *       - "user"
 *     description: Get user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Get all users.
 */

router.get('/all', userController.getAllUsers);
router.post('/add', userController.addUser);

module.exports = router;