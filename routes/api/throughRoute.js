const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/throughtsController')

// Endpoint: /api/thoughts"
router.route('/').get(getThoughts).post(createThought);

// Endpoint: "/api/thoughts/:thoughtId"
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Endpoint: "/api/thoughts/:thoughtId/reactions"
router.route('/:thoughtId/reactions').post(addReaction);

// Endpoint: /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
