let express = require('express');
let router = express.Router();
const db = require('../db/queries/songQueries');


router.get('/', db.getAllSongs );     // http://localhost:3100/users
router.post('/', db.postNewSong);
router.get('/:song_id', db.getOneSong);

router.delete('/:song_id', db.deleteSingleSong);

router.get('/genre/:genre_id', db.getAllSongsForSpecificGenre)
router.get('/user/:user_id', db.getAllSongsPostedBySpecificUser);

module.exports = router;
