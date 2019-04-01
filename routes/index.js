var express = require('express');
var router = express.Router();
// var {Howl, Howler} = require('howler');
// var snd=new Howl({src:["wav/01.wav"]})
// snd.play()

var gcb=function(req, res, next) {
res.render('index', { title: 'wavesurfer.js' });
}
/* GET home page. */
router.get('/', gcb);

module.exports = router;
