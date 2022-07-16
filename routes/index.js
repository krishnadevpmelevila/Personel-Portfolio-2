var express = require('express');
const { getLinkPreview } = require('link-preview-js');
var router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser();


/* GET home page. */
router.get('/', function (req, res, next) {

  

  (async () => {

    let feed = await parser.parseURL('https://krishnadevpmelevila.medium.com/feed');
    console.log(feed.title);

    feeds = [];
    feed.items.forEach(item => {
      date=item.pubDate.split(' ');

      feeds.push({
        title: item.title,
        link: item.link,
        date: date[0]+' '+date[1]+' '+date[2]+' '+date[3]
      })
    });

    res.render('index', { title: 'Krishnadev P Melevila | Self Learned Ethical Hacker',feeds });
  })();



});

module.exports = router;
