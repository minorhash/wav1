var express = require('express');
var router = express.Router();
// var {Howl, Howler} = require('howler');
// var snd=new Howl({src:["wav/01.wav"]})
// snd.play()

var gcb=function(req, res, next) {
res.render('spr', { title: 'Express' });
}
/* GET home page. */
router.get('/spr', gcb);

module.exports = router;
