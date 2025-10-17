const model = require('../models/friends.model')


function getFriends(req, res){
  res.json(model); // Send all friends as JSON
}

 function getFriend(req, res){
  const friendsID = Number(req.params.friendsID); // Convert param to number
  const friend = model[friendsID]; 
  if (friend) res.status(200).json(friend); // Found: send data
  else res.status(404).json({ error: 'Friend does not exist' }); // Not found: 404
}

function postFriend(req, res){
  if(!req.body.name){
    res.status(400).json({
      error:"Missing friend name!"
    })
  }
  const newFriend = {
    id: model.length,
    name: req.body.name
  }
  model.push(newFriend)
  res.json(newFriend)
}

module.exports = {
  getFriend,
  getFriends,
  postFriend
}