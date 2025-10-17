const express = require('express')
const friendController = require('../controllers/friends.controller')

const friendRouter = express.Router()

friendRouter.use((req, res, next) =>{
 console.log('ip address', req.ip);
})

friendRouter.post('/', friendController.postFriend)
friendRouter.get('/', friendController.getFriends);
friendRouter.get('/:friendsID', friendController.getFriend);

module.exports = friendRouter