var express = require('express');
var router = express.Router();
var speech_to_text = require('./features/speech_to_text');

module.exports = router;
// speech-to-text. Tells the browser how to call the server
router.get('/api/speech-to-text/token*',speech_to_text.token);
