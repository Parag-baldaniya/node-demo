const { Router } = require('express');
const userRouter = require('../api/users/users.route');
const apiDocsRoute = require('./api.docs.route');
const router = Router();

router.use("/api-docs", apiDocsRoute);
router.use('/user', userRouter)

module.exports = router;